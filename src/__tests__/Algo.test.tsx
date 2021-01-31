import { isPrime, findPrimeLoop, calcPrime, sieve } from '../components/Algo';

describe('Algo >> isPrime function: ', () => {
  it('returns false for input = -1', () => {
    expect(isPrime(-1)).toBe(false);
  });

  it('returns false for input = 0', () => {
    expect(isPrime(0)).toBe(false);
  });

  it('returns false for input = 1', () => {
    expect(isPrime(1)).toBe(false);
  });

  it('returns false for input = 1.5', () => {
    expect(isPrime(1.5)).toBe(false);
  });

  it('returns true for input = 2', () => {
    expect(isPrime(2)).toBe(true);
  });

  it('returns true for input = 3', () => {
    expect(isPrime(3)).toBe(true);
  });
});

describe('Algo >> findPrimeLoop function: ', () => {
  it('returns itself if it is a prime number', () => {
    expect(findPrimeLoop(21)).toBe(19);
  });
  it('returns closest prime number', () => {
    expect(findPrimeLoop(19)).toBe(19);
  });
});

describe('Algo >> calcPrime function: ', () => {
  it('alerts when input < 0', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});   
    calcPrime(-1);
    expect(window.alert).toBeCalledWith('Please input a positive integer!');
    // expect(window.calcPrime(-1)).toHaveBeenCalledWith('Please input a positive integer!')
  });
  
  it('returns None for input = 0', () => {
    expect(calcPrime(0)).toBe('None');
  });

  it('returns None for input = 1', () => {
    expect(calcPrime(1)).toBe('None');
  });

  it('returns None for input = 2', () => {
    expect(calcPrime(2)).toBe('None');
  });

  it('returns 2 for input = 3', () => {
    expect(calcPrime(3)).toBe('2');
  });

  it('returns result for odd prime number input', () => {
    expect(calcPrime(19)).toBe('17');
  });

  it('returns result for even number input', () => {
    expect(calcPrime(20)).toBe('19');
  });

  it('returns result for even number input which number-1 is still not a prime number', () => {
    expect(calcPrime(22)).toBe('19');
  });

  it('returns result for odd number input', () => {
    expect(calcPrime(21)).toBe('19');
  });

  it('returns None for input > MAX_SAFE_INTEGER', () => {
    expect(calcPrime(Number.MAX_SAFE_INTEGER + 10)).toBe('Input a number less than 2^53 - 1');
  });
});

describe('Algo >> sieve function: ', () => {
  it('returns correct prime numbers in the given range', () => {
    expect(sieve(10,1)).toStrictEqual([2, 3, 5, 7]);
  });
  it('returns `Non in Range` when no prime numbers found', () => {
    expect(sieve(148,140)).toStrictEqual(['None in Range']);
  });
});