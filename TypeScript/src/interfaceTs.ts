type Order = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: Order) {
  console.log(order);
}

function serverChai(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order);
}

type TeaRecipe = {
  milk: number;
  sugar: number;
};

class MasalaChai implements TeaRecipe {
  milk = 500;
  sugar = 200;
}

interface cupSize {
  size: "small" | "large";
}

class Chai implements cupSize {
  size: "small" | "large" = "large";
}

interface user {
    id: number,
    username: string,
    email: string,
    role: "admin" | "user",
    isActive: boolean
}

interface admin extends user {
    permission: string,
    department: string,
    createdAt: Date;
}

