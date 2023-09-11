export interface Config {
  cardTextlimit: number
}

export const config: Config = {
  cardTextlimit: Number(process.env.CARD_TEXT_LIMIT) || 40
}
