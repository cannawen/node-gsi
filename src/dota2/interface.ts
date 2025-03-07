export const enum TeamType {
  Dire = 'dire',
  Radiant = 'radiant',
}

export const enum Dota2Event {
  Dota2State = 'dota2-state',
  Dota2ObserverState = 'dota2-observer-state',
}

export const enum Dota2GameState {
  Init = 'DOTA_GAMERULES_STATE_INIT',
  HeroSelection = 'DOTA_GAMERULES_STATE_HERO_SELECTION',
  StrategyTime = 'DOTA_GAMERULES_STATE_STRATEGY_TIME',
  TeamShowcase = 'DOTA_GAMERULES_STATE_TEAM_SHOWCASE',
  PreGame = 'DOTA_GAMERULES_STATE_PRE_GAME',
  GameInProgress = 'DOTA_GAMERULES_STATE_GAME_IN_PROGRESS',
  PostGame = 'DOTA_GAMERULES_STATE_POST_GAME',
}

export const enum EventType {
  AegisPickedUp = 'aegis_picked_up',
  BountyRunePickup = 'bounty_rune_pickup',
  RoshanKilled = 'roshan_killed',
  AegisDenied = 'aegis_denied',
  Tip = 'tip',
  CourierKilled = 'courier_killed',
}

export interface IDota2StateEvent {
  state: IDota2State;
  changes: IDota2State;
  auth: string | null;
}

export interface IDota2ObserverStateEvent {
  state: IDota2ObserverState;
  changes: IDota2ObserverState;
  auth: string | null;
}

export interface IDota2BaseState {
  buildings: IBuildings | null;
  provider: IProvider | null;
  events: IEvent[] | null;
  minimap: IMinimapElement[] | null;
}

export interface IDota2State extends IDota2BaseState {
  map: IMap | null;
  player: IPlayer | null;
  hero: IHero | null;
  abilities: IAbility[] | null;
  items: IItemContainer | null;
  wearables: IWearbleItem[] | null;
  draft: IDraft | null;
}

export interface IDota2ObserverState extends IDota2BaseState {
  map: IMapObserver | null;
  player: IPlayerObserver[] | null;
  hero: IHero[] | null;
  abilities: IAbility[][] | null;
  items: IItemContainer[] | null;
  wearables: IWearbleItem[][] | null;
  draft: IDraft | null;
}

export interface IBuildings {
  radiant: Record<string, IBuilding>;
  dire: Record<string, IBuilding>;
}

export interface IBuilding {
  health: number;
  maxHealth: number;
}

export interface IProvider {
  name: string;
  appid: number;
  version: number;
  timestamp: number; // In seconds.
}

export interface IMap {
  name: string;
  matchid: number;
  gameTime: number;
  clockTime: number;
  dayTime: boolean;
  nightstalkerNight: boolean;
  gameState: Dota2GameState;
  paused: boolean;
  winTeam: TeamType;
  customgamename: string;
}

export interface IMapObserver extends IMap {
  radiantWardPurchaseCooldown: number;
  direWardPurchaseCooldown: number;
  roshanState: string;
  roshanStateEndSeconds: number;
}

export interface IMinimapElement {
  unitname: string;
  xpos: number;
  ypos: number;
  team: TeamType | null;
}

export interface IPlayer {
  steamid: string;
  name: string;
  activity: string;
  kills: number;
  deaths: number;
  assists: number;
  lastHits: number;
  denies: number;
  killStreak: number;
  commandsIssues: number;
  killList: IPlayerKill[];
  team: TeamType;
  gold: number;
  goldReliable: number;
  goldUnreliable: number;
  goldFromHeroKills: number;
  goldFromCreepKills: number;
  goldFromIncome: number;
  goldFromShared: number;
  gpm: number;
  xpm: number;
}

export interface IPlayerObserver extends IPlayer {
  netWorth: number;
  heroDmg: number;
  wardsPurchased: number;
  wardsPlaced: number;
  wardsDestroyed: number;
  runesActivated: number;
  campsStacked: number;
  supportGoldSpent: number;
  consumableGoldSpent: number;
  itemGoldSpent: number;
  goldLostToDeath: number;
  goldSpentOnBuybacks: number;
}

export interface IPlayerKill {
  victimSlot: number;
  killCount: number;
}

export interface IHero {
  xpos: number;
  ypos: number;
  id: number;
  name: string;
  level: number;
  alive: boolean;
  respawnSeconds: number;
  buybackCost: number;
  buybackCooldown: number;
  health: number;
  maxHealth: number;
  healthPercent: number;
  mana: number;
  maxMana: number;
  manaPercent: number;
  silenced: boolean;
  stunned: boolean;
  disarmed: boolean;
  magicimmune: boolean;
  hexed: boolean;
  muted: boolean;
  break: boolean;
  smoked: boolean;
  hasDebuff: boolean;
  selectedUnit: boolean;
  talents: boolean[]; // Each talent in slot of array
}

export interface IAbility {
  name: string;
  level: number;
  canCast: boolean;
  passive: boolean;
  abilityActive: boolean;
  cooldown: number;
  ultimate: boolean;
}

export interface IItemContainer {
  slot: Array<IItem | null>;
  stash: Array<IItem | null>;
  teleport: IItem | null;
  neutral: IItem | null;
}

export interface IItem {
  name: string;
  purchaser: number;
  containsRune?: boolean;
  canCast?: boolean;
  cooldown?: number;
  passive: boolean;
  charges?: number;
}

export interface IDraft {
  activeteam: number;
  pick: boolean;
  activeteamTimeRemaining: number;
  radiantBonusTime: number;
  direBonusTime: number;
  pickBans: IPickBan[];
}

export interface IPickBan {
  pick: { id: number; class: string } | null;
  ban: { id: number; class: string } | null;
}

export interface IWearbleItem {
  wearable: number;
  style?: number;
}

export interface IEvent {
  gameTime: number;
  eventType: EventType;
  playerId: number | null;
  team: TeamType | null;
  bountyValue: number | null;
  teamGold: number | null;
  killedByTeam: TeamType | null;
  killerPlayerId: number | null;
  snatched: boolean | null;
  senderPlayerId: number | null;
  receiverPlayerId: number | null;
  tipAmount: number | null;
  courierTeam: TeamType | null;
  owningPlayerId: number | null;
}
