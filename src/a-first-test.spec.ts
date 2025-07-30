import { describe, expect, test } from 'vitest';

class Game {
  private rolls: number[] = [];
  roll(number: number) {
    this.rolls.push(number);
  }

  score() {
    return this.rolls[0] + this.rolls[1] + this.rolls[2] + this.rolls[3] + this.rolls[4] + this.rolls[5] + this.rolls[6] + this.rolls[7] + this.rolls[8] + this.rolls[9]
      + this.rolls[10] + this.rolls[11] + this.rolls[12] + this.rolls[13] + this.rolls[14] + this.rolls[15] + this.rolls[16] + this.rolls[17] + this.rolls[18] + this.rolls[19];
  }
}

describe('', () => {
  test('', () => {
    const game: Game = new Game();
    for (let i = 0; i < 20; i++)
      game.roll(1);
    expect(game.score()).toBe(20);
  });
  test('', () => {
    const game: Game = new Game();
    for (let i = 0; i < 20; i++)
      game.roll(2);
    expect(game.score()).toBe(40);
  });
  test('', () => {
    const game: Game = new Game();
    game.roll(9);
    game.roll(1);
    for (let i = 0; i < 18; i++)
      game.roll(1);
    expect(game.score()).toBe(29);
  });
});
