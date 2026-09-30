# Seguridad del portafolio

## Qué aplica a este sitio (estático, sin backend)
- Sin base de datos, API propia, formularios ni cookies: por eso row-level security,
  límites de API, protección de cookies y manipulación de campos **no aplican hoy**.
- Sí aplican: CSP, HTTPS, cabeceras, enlaces externos seguros y no exponer secretos.

## HTTPS
- GitHub Pages: Settings → Pages → marcar **Enforce HTTPS**.
- La CSP incluye `upgrade-insecure-requests` como refuerzo.

## Cabeceras de seguridad
- Las etiquetas `<meta>` solo cubren CSP y Referrer-Policy.
- `X-Frame-Options`, HSTS, `nosniff` y `frame-ancestors` **solo funcionan como cabecera HTTP real**.
- El archivo `_headers` funciona en Netlify y Cloudflare Pages. **GitHub Pages no lo lee.**
- Verifica el resultado en https://securityheaders.com

## Buscar secretos en el historial de git
El zip no incluía la carpeta `.git`, así que el historial no se pudo revisar. Ejecútalo en tu repo:

```bash
# 1) Escáner completo del historial
docker run --rm -v "$PWD:/repo" zricethezav/gitleaks:latest detect --source /repo -v
# 2) Archivos sensibles que alguna vez se subieron
git log --all --name-only --pretty=format: | sort -u | grep -Ei '\.env|\.pem|\.key|secret|credential'
# 3) Buscar una cadena concreta en todo el historial
git log --all -p -S'AIza' --oneline
```

Si aparece un secreto:
1. **Revócalo y genera uno nuevo** (borrar el commit no basta: ya puede estar copiado).
2. Limpia el historial: `git filter-repo --path .env --invert-paths`
3. `git push --force --all` y avisa a quien haya clonado el repo.

## Si agregas un formulario o backend más adelante
- Claves de API solo en variables de entorno del servidor (nunca en JS del navegador).
- Validar y sanear en el servidor; ignorar campos que el usuario no debería enviar (lista blanca).
- Límite de peticiones (rate limit) y captcha (Cloudflare Turnstile).
- Cookies: `HttpOnly; Secure; SameSite=Lax`.
- Base de datos con RLS (Supabase/Postgres): activar RLS en cada tabla y escribir políticas.
- Actualizar la política de privacidad y cookies.

## Recomendaciones pendientes (decisión tuya)
- Google Fonts envía la IP de cada visitante a Google: para evitarlo, descarga Inter y sírvela desde el propio sitio.
- El número de WhatsApp está visible en el código fuente (riesgo de spam).
- Verifica que el dominio en `canonical`, `og:url`, `robots.txt` y `sitemap.xml` sea el real.
