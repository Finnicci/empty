$ErrorActionPreference = "Stop"

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$port = 4174
$prefix = "http://127.0.0.1:$port/"

$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Host "Serving $root at $prefix"

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

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    try {
      $path = $context.Request.Url.AbsolutePath
      $relative = [Uri]::UnescapeDataString($path.TrimStart("/"))
      if ([string]::IsNullOrWhiteSpace($relative)) {
        $relative = "index.html"
      }

      $target = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($root, $relative))
      if (-not $target.StartsWith($root) -or -not [System.IO.File]::Exists($target)) {
        $context.Response.StatusCode = 404
        $body = [Text.Encoding]::UTF8.GetBytes("Not found")
        $context.Response.ContentType = "text/plain; charset=utf-8"
      } else {
        $body = [System.IO.File]::ReadAllBytes($target)
        $ext = [System.IO.Path]::GetExtension($target).ToLowerInvariant()
        $context.Response.ContentType = $mime[$ext]
        if (-not $context.Response.ContentType) {
          $context.Response.ContentType = "application/octet-stream"
        }
      }

      $context.Response.Headers.Add("Cache-Control", "no-store")
      $context.Response.ContentLength64 = $body.Length
      $context.Response.OutputStream.Write($body, 0, $body.Length)
    } catch {
      $context.Response.StatusCode = 500
      $body = [Text.Encoding]::UTF8.GetBytes($_.Exception.Message)
      $context.Response.ContentType = "text/plain; charset=utf-8"
      $context.Response.ContentLength64 = $body.Length
      $context.Response.OutputStream.Write($body, 0, $body.Length)
    } finally {
      $context.Response.OutputStream.Close()
    }
  }
} finally {
  $listener.Stop()
}
