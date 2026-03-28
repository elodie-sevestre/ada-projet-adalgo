/** totalPrice()
 * This function takes an array of gifts and returns the total price.
 *
 * @example
 *      totalPrice([{name: 'iPhone', price: 800}, {name: 'skateboard', price: 70}]); // returns 870
 *
 * @param {{name: string, price: number}[]} gifts
 * @returns {number} total price
 */

export const totalPrice = (gifts) => {
  let result = 0;
  gifts.forEach((element) => {
    console.log(element);
    result += element.price;
  });
  return result;
};

/** mostExpensive()
 * This function takes an array of gifts and returns the name of the most expensive one.
 *
 * @param {{name: string; price: number}[]} gifts
 * @returns {string} gift's name
 */

export const mostExpensive = (gifts) => {
  let maxGift = gifts[0];
  for (const gift of gifts) {
    if (gift.price > maxGift.price) {
      maxGift = gift;
    }
  }
  return maxGift.name;
};

/** globalMostExpensive()
 * This function takes an array of kids and returns the name of the most expensive gift
 * within all kids.
 *
 * Each kid in an objet with a name and a list of gift.
 * Each give has a name and a price.
 *
 * @example
 *     globalMostExpensive([
 *          {name: 'Issa', gifts: [{name: 'iPhone', price: 800}, {name: 'skateboard', price: 70}]},
 *          {name: 'Noor', gifts: [{name: 'apple', price: 1}]}
 *      ]); // returns 'iPhone'
 *
 * @param {{name: string; gifts: {name: string; price: number}[]}[]} kids
 * @returns {string} gift's name
 */

export const globalMostExpensive = (kids) => {
  if (kids.length === 0) return null;

  let maxGift = null;

  for (const kid of kids) {
    for (const gift of kid.gifts) {
      if (maxGift === null || gift.price > maxGift.price) {
        maxGift = gift;
      }
    }
  }

  return maxGift.name;
};

/** preferedKid()
 * This function takes an array of kids and return the name of the kid that has
 * the most expensive gifts for christmas.
 *
 * Each kid in an objet with a name and a list of gift.
 * Each give has a name and a price.
 *
 * For example if a kid get an iPhone (800€) and a skateboard (70€), it would have 870€
 * of gifts. If another gets an apple (1€), the prefered kid is the first one.
 *
 * @example
 *     preferedKid([
 *          {name: 'Issa', gifts: [{name: 'iPhone', price: 800}, {name: 'skateboard', price: 70}]},
 *          {name: 'Noor', gifts: [{name: 'apple', price: 1}]}
 *      ]); // returns 'Issa'
 *
 * @param {{name: string; gifts: {name: string; price: number}[]}[]} kids
 * @returns {string} kid's name
 */

export const preferedKid = (kids) => {
  if (kids.length === 0) return undefined;

  let expensiveKid = null; // l'enfant le plus cher
  let maxTotal = 0;

  for (const kid of kids) {
    const totalGifts = kid.gifts.reduce((sum, gift) => sum + gift.price, 0);
    if (expensiveKid === null || totalGifts > maxTotal) {
      maxTotal = totalGifts;
      expensiveKid = kid.name;
    }
  }
  return expensiveKid;
};

/** distributeGifts()
 * Distributes a list of gifts among a list of kids.
 *
 * Each gift is assigned to one kid, and **all assigned gifts are removed from the
 * original `gifts` array** (the array MUST be emptied by the end of the function).
 * Kids receive gifts directly in their existing `gifts` arrays.
 *
 * The distribution rules are:
 *  1. Higher `behaviorScore` means higher priority when selecting recipients.
 *  2. **However, overall balance in total gift value takes priority over behavior.**
 *     That is, if giving a gift to a higher-score kid would create a large imbalance,
 *     the gift should go to a kid with a lower total (even with a lower behaviorScore).
 *  3. Assign more valuable gifts earlier (sort gifts by price descending).
 *  4. Mutate all input arrays in-place:
 *       - Remove gifts from `gifts`
 *       - Push them into `kids[i].gifts`
 *
 * **Notes / Edge Cases**
 *  - If two kids have the same total gift value so far, behaviorScore breaks ties.
 *  - A kid may end up with no gifts if there are fewer gifts than kids.
 *  - If `gifts` is empty, no changes occur to kids.
 *  - Behavior scores are expected in the range [0, 1], but the function does not enforce it.
 *
 * @param {{ name: string; price: number }[]} gifts
 *   Array of available gifts. Mutated by the function until it becomes empty.
 *
 * @param {{
 *   name: string;
 *   behaviorScore: number;
 *   gifts: { name: string; price: number }[];
 * }[]} kids
 *   Array of kids. Their `gifts` arrays will be mutated to include assigned items.
 *
 * @returns {{
 *   name: string;
 *   behaviorScore: number;
 *   gifts: { name: string; price: number }[];
 * }[]}
 *   The same `kids` array with updated gift assignments.
 *
 * @example
 * //* Balanced distribution example
 * const gifts = [
 *   { name: "RC Car", price: 60 },
 *   { name: "Lego Set", price: 40 },
 *   { name: "Chocolate Box", price: 10 },
 *   { name: "Puzzle", price: 15 }
 * ];
 *
 * const kids = [
 *   { name: "Alice", behaviorScore: 0.95, gifts: [] },
 *   { name: "Bob", behaviorScore: 0.85, gifts: [] },
 *   { name: "Charlie", behaviorScore: 0.40, gifts: [] }
 * ];
 *
 * distributeGifts(gifts, kids);
 *
 * //* Correct result respecting balance priority:
 * //* Alice:   RC Car (60)
 * //* Bob:     Lego Set (40)
 * //* Charlie: Puzzle (15)
 * //* Charlie: Chocolate Box (10)  // NOT Alice — gives better total-value balance
 *
 * //* gifts is now []
 *
 * @example
 * //* Example with tied scores and a limited gift pool:
 * const gifts = [
 *   { name: "Book", price: 20 },
 *   { name: "Stickers", price: 5 },
 * ];
 *
 * const kids = [
 *   { name: "Emma", behaviorScore: 0.7, gifts: [] },
 *   { name: "Liam", behaviorScore: 0.7, gifts: [] },
 *   { name: "Noah", behaviorScore: 0.3, gifts: [] }
 * ];
 *
 * distributeGifts(gifts, kids);
 *
 * //* Emma: Book (20)
 * //* Liam: Stickers (5)
 * //* Noah: []
 *
 * //* gifts is now []
 */

export const distributeGifts = (gifts, kids) => {
  if (kids.length === 0) return []; // Si kids est vide, on retourne directement sans rien faire

  // Trier les cadeaux du plus cher au moins cher
  // - comparer chaque cadeau avec le suivant et les échanger si nécessaire
  for (let i = 0; i < gifts.length; i++) {
    for (let j = 0; j < gifts.length - 1; j++) {
      if (gifts[j].price < gifts[j + 1].price) {
        let giftMostExpensive = gifts[j];
        gifts[j] = gifts[j + 1];
        gifts[j + 1] = giftMostExpensive;
      }
    }
  }

  // Distribuer les cadeaux tant qu'il en reste
  // - comparer avec chaque autre enfant pour trouver le meilleur candidat
  while (gifts.length > 0) {
    let bestKid = kids[0]; // le premier enfant est le meilleur candidat

    for (let i = 1; i < kids.length; i++) {
      // -- calculer le total des cadeaux de l'enfant en cours et du meilleur candidat
      const totalKid = kids[i].gifts.reduce((sum, gift) => sum + gift.price, 0);
      const totalBestKid = bestKid.gifts.reduce(
        (sum, gift) => sum + gift.price,
        0,
      );
      // -- si l'enfant en cours a un total inférieur : il devient le nouveau candidat
      if (totalKid < totalBestKid) {
        bestKid = kids[i];
        // -- si les totaux sont égaux et que son behaviorScore est supérieur : il devient le nouveau candidat
      } else if (
        totalKid === totalBestKid &&
        kids[i].behaviorScore > bestKid.behaviorScore
      ) {
        bestKid = kids[i];
      }
    }
    // - donner le cadeau le plus cher restant au meilleur candidat
    bestKid.gifts.push(gifts[0]); // ajouter le cadeau dans les cadeaux de l'enfant
    gifts.shift(); // retirer le cadeau du tableau gifts
  }
  return kids;
};
