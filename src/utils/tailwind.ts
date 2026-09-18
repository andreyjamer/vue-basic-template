export function tw(classes: string): string
export function tw(strings: TemplateStringsArray, ...values: unknown[]): string
export function tw(stringsOrClasses: string | TemplateStringsArray, ...values: unknown[]): string {
  if (typeof stringsOrClasses === 'string') {
    return stringsOrClasses
  }

  return String.raw({ raw: stringsOrClasses }, ...values)
}
