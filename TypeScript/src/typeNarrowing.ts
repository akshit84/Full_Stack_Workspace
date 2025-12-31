function followers(count: string | number) {
  if (typeof count === "string") {
    return `You have ${count} followers `;
  }
  return `You have ${count} followers`;
}

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return "Serving default masala chai ";
}

// Exhoustive check example
function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `Serving small cutting chai`;
  }
  if (size === "medium" || size === "large") {
    return `make extra chai`;
  }

  return `Chai ordered ${size}`;
}

class KulhadChai {
  serve() {
    return `Serving kulhad chai`;
  }
}

class cuttingChai {
  serve() {
    return `Serving cutting chai`;
  }
}

function serve(chai: KulhadChai | cuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
  return chai.serve();
}

// Type guard or custom types
type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serverOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} chai with ${item.sugar} sugar`;
  }
  return `Serving custom chai: ${item}`;
}

type MasalaChai = { type: "masala"; spicelevel: number };
type GingerChai = { type: "ginger"; amount: number };
type EliachiChai = { type: "eliachi"; aroma: number };

type Chai = MasalaChai | GingerChai | EliachiChai;

function MakeChai(order: Chai) {
  switch (order.type) {
    case "masala":
      return "Masala chai";
      break;
    case "ginger":
      return "Ginger chai";
      break;
    case "eliachi":
      return "Eliachi chai";
      break;
  }
}

