import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  //Pre-render (ultimas clases del curso), para paginas q no cambian, y quiero pre-construir antes q sean visitadas.
  async prerender(){
    return ['/auth/login','/auth/register','auth/testing'];
  },
} satisfies Config;
