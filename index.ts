export class Example {
   someKey = "";

   method() {
      const data = {} as Record<string, this["someKey"]>;

      return data;
   }
}
