$ErrorActionPreference = "Stop"

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$port = 4173
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Parse("127.0.0.1"), $port)
$listener.Start()

$mime = @{
  ".html" = "text/html; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".js" = "application/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".webmanifest" = "application/manifest+json; charset=utf-8"
  ".svg" = "image/svg+xml"
  ".png" = "image/png"
  ".jpg" = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".ico" = "image/x-icon"
}

while ($true) {
  $client = $listener.AcceptTcpClient()
  try {
    $stream = $client.GetStream()
    $reader = [System.IO.StreamReader]::new($stream, [Text.Encoding]::ASCII, $false, 1024, $true)
    $requestLine = $reader.ReadLine()
    while (($line = $reader.ReadLine()) -ne $null -and $line -ne "") {}

    $path = "/"
    $parts = $requestLine -split " "
    if ($parts.Length -ge 2) {
      $path = $parts[1].Split("?")[0]
    }

    $relative = [Uri]::UnescapeDataString($path.TrimStart("/"))
    if ([string]::IsNullOrWhiteSpace($relative)) {
      $relative = "index.html"
    }

    $target = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($root, $relative))
    $status = "200 OK"
    if (-not $target.StartsWith($root) -or -not [System.IO.File]::Exists($target)) {
      $status = "404 Not Found"
      $body = [Text.Encoding]::UTF8.GetBytes("Not found")
      $contentType = "text/plain; charset=utf-8"
    } else {
      $body = [System.IO.File]::ReadAllBytes($target)
      $ext = [System.IO.Path]::GetExtension($target).ToLowerInvariant()
      $contentType = $mime[$ext]
      if (-not $contentType) {
        $contentType = "application/octet-stream"
      }
    }

    $header = "HTTP/1.1 $status`r`nContent-Type: $contentType`r`nContent-Length: $($body.Length)`r`nCache-Control: no-store`r`nConnection: close`r`n`r`n"
    $headerBytes = [Text.Encoding]::ASCII.GetBytes($header)
    $stream.Write($headerBytes, 0, $headerBytes.Length)
    $stream.Write($body, 0, $body.Length)
  } catch {
    # Keep the playtest server alive even if a browser closes a request early.
  } finally {
    $client.Close()
  }
}
