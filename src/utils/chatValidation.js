import { z } from "zod";

/**
 * Esquema Zod para el input del chatbot.
 * 1. Sanitiza: elimina caracteres de control y colapsa espacios.
 * 2. Valida: longitud mínima y máxima.
 */
const querySchema = z
  .string()
  .transform((val) =>
    val
      .trim()
      .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // eslint-disable-line no-control-regex
      .replace(/\s+/g, " ")
  )
  .pipe(
    z
      .string()
      .min(15, "El mensaje debe tener al menos 15 caracteres.")
      .max(500, "El mensaje no puede superar 500 caracteres.")
  );

/**
 * Sanitiza y valida el input del chatbot en un solo paso.
 *
 * @param {string} texto - Texto ingresado por el usuario.
 * @returns {{ valor: string|null, error: string|null }}
 */
export function procesarInput(texto) {
  const result = querySchema.safeParse(texto);
  if (!result.success) {
    const mensaje =
      result.error?.issues?.[0]?.message ??
      result.error?.errors?.[0]?.message ??
      "Entrada inválida.";
    return { valor: null, error: mensaje };
  }
  return { valor: result.data, error: null };
}
