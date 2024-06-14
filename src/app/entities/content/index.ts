/**
 * Validations
 * Format content
 * Regex
 */

export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  };

  private validate(ctx: string): boolean {
    return ctx.length >= 5 && ctx.length <= 240
  };

  constructor(ctx: string) {
    const isContentLengthValid = this.validate(ctx);

    if (!isContentLengthValid) {
      throw new Error('Content length error');
    };

    this.content = ctx;
  };
};