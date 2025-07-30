import { describe, expect, test, beforeEach } from 'vitest';

class Game {
  private rolls: number[] = [];
  roll(number: number) {
    this.rolls.push(number);
  }

  score() {
    let score = 0;
    let rollNumber = 0;
    let frameNumber = 0;
    while (frameNumber < 10) {
      if(this.rolls[rollNumber] === 10) {
        score += this.rolls[rollNumber] + this.rolls[rollNumber+1] + this.rolls[rollNumber+2];
        rollNumber += 1;
      } else if (this.rolls[rollNumber] + this.rolls[rollNumber + 1] === 10) {
        score += this.rolls[rollNumber] + this.rolls[rollNumber + 1] + this.rolls[rollNumber + 2];
        rollNumber += 2;
      } else {
        score += this.rolls[rollNumber] + this.rolls[rollNumber + 1];
        rollNumber += 2;
      }
      frameNumber +=1;
    }
    return score;
  }
}


describe('', () => {
  let game: Game;
  beforeEach(() => {
    game = new Game();
  });

  test('', () => {
    roll(1, 20);
    expect(game.score()).toBe(20);
  });
  test('', () => {
    roll(2, 20);
    expect(game.score()).toBe(40);
  });
  test('', () => {
    game.roll(9);
    game.roll(1);
    roll(1, 18);
    expect(game.score()).toBe(29);
  });
  test('', () => {
    roll(1, 4);
    game.roll(9);
    game.roll(1);
    roll(1, 14);
    expect(game.score()).toBe(29);
  });
  test('', () => {
    game.roll(10);
    roll(1, 18);
    expect(game.score()).toBe(30);
  });
  test('', () => {
    roll(10, 12);
    expect(game.score()).toBe(300);
  });

  function roll(value: number, nTimes: number) {
    for (let i = 0; i < nTimes; i++)
      game.roll(value);
  }
});



