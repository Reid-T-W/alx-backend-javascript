interface MajorCredits {
  credit: number;
  brand: unique symbol;
}

interface MinorCredits {
  credit: number;
  brand: unique symbol;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
  return(subject1.credit + subject2.credit);
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
  return(subject1.credit + subject2.credit);
}
