/**
 * Private helper function for getting enum instances from their string value.
 * @param {T} enumType
 * @param {string} value
 * @returns {T}
 */
export function enumFromValue<T extends Record<string, string>>(
  enumType: T,
  value: string
): T {
  const enumName = (Object.keys(enumType) as Array<keyof T>).find(
    k => enumType[k] === value
  );
  if (!enumName) {
    throw new Error(
      `No enum value '${value}' found in enum; values: ${JSON.stringify(
        Object.keys(enumType)
      )}`
    );
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return enumType[enumName];
}
