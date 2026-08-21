# Migración de subjetividades.cl a la cuenta de Daniel

Estado y pasos para dejar todo en las cuentas de Daniel (danielreyespace@gmail.com).

## Ya hecho ✅
- **Código** en `danielreyespace/subjetividades` (GitHub de Daniel), con historial.
- **Rediseño** mergeado a `main` y publicado en el Pages project **`subjetividades`**
  de la cuenta Cloudflare de Daniel → live en `https://subjetividades.pages.dev`.
- Diff de invariantes SEO verificado limpio (title/meta/canonical/H1/schema/tracking).

## Pendiente 1 — Auto-deploy (tarea de Daniel, ~3 min, 1 secret)
El workflow `.github/workflows/deploy.yml` ya apunta a tu cuenta (account id fijo) y
al project `subjetividades`. Solo falta el token:

1. Cloudflare → **My Profile → API Tokens → Create Token**.
2. Plantilla **"Edit Cloudflare Workers"** o token personalizado con permiso
   **Account → Cloudflare Pages → Edit** (scope: tu cuenta).
3. Copia el token.
4. GitHub → repo `danielreyespace/subjetividades` → **Settings → Secrets and
   variables → Actions → New repository secret**:
   - Name: `CLOUDFLARE_API_TOKEN`
   - Secret: (el token)
5. Listo. Cada push a `main` despliega solo a `subjetividades.pages.dev`.
   (Puedes re-lanzar el último run fallido en la pestaña Actions.)

> Mientras no exista el secret, el workflow corre y falla en el paso de deploy
> (inofensivo). Yo puedo seguir desplegando manual cuando haga falta.

## Pendiente 2 — Corte de dominio (el paso delicado)
Estado actual: `subjetividades.cl` registrado en **NIC Chile**, apuntando por
nameservers a la zona de Cloudflare **de Álvaro** (`cody`/`monroe.ns.cloudflare.com`).
Sin MX (no hay correo). Único registro a preservar: **TXT de Google Search Console**
`google-site-verification=L8sktHEtO5w1aLfEVUX6uUF7eBDgHHU7wBg52Chl5XY`.

### Secuencia recomendada (mueve la zona a tu cuenta)
1. **Daniel:** Cloudflare → **Add a site** → `subjetividades.cl`. Cloudflare escanea
   el DNS y te asigna un **nuevo par de nameservers** (anótalos).
2. **Daniel:** en esa zona nueva, deja los registros mínimos:
   - el **TXT** de Search Console (arriba),
   - (el registro raíz lo gestiona el custom domain de Pages en el paso 4).
3. **Álvaro:** eliminar la zona `subjetividades.cl` de **su** Cloudflare
   (una zona solo puede estar activa en una cuenta). Coordinar el momento con el paso 4.
4. **Daniel:** Cloudflare → Pages → `subjetividades` → **Custom domains** →
   agregar `subjetividades.cl` (y `www`). Cloudflare provisiona el SSL.
5. **Daniel:** NIC Chile (nic.cl) → `subjetividades.cl` → cambiar los **nameservers**
   al nuevo par de Cloudflare. Guardar.
6. **Esperar propagación** (minutos–horas). Verificar:
   - `https://subjetividades.cl` carga el rediseño con HTTPS,
   - el ping de conversión `/thankyou` + gtag AW dispara,
   - Search Console sigue verificado (el TXT se preservó).
7. **Álvaro:** una vez verificado, dar de baja el project viejo "dreyes".

### Seguridad del corte
- **Reversible:** si algo falla, volver los nameservers en NIC al par de Álvaro
  (`cody`/`monroe`) restaura el sitio anterior.
- Ventana de indisponibilidad: breve (propagación de NS). Google tolera cortes cortos.
- No hay correo que romper; solo preservar el TXT de Search Console.

### Alternativa de menor downtime (opcional)
Si prefieres no mover la zona ahora: Álvaro cambia en **su** Cloudflare el registro
raíz a un CNAME hacia `subjetividades.pages.dev` (con CNAME flattening), y agregas el
custom domain en tu Pages project. El sitio queda servido desde tu cuenta pero el DNS
sigue administrado por Álvaro. Menos "propio", pero sin tocar NIC ni mover la zona.

## Quién hace qué
- **Daniel:** secret de auto-deploy; add site + registros + custom domain en su
  Cloudflare; cambio de nameservers en NIC Chile.
- **Álvaro:** liberar la zona `subjetividades.cl` de su Cloudflare (paso 3), coordinar
  el timing, y dar de baja "dreyes" al final.
