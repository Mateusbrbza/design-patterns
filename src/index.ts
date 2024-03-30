import { RecordHandler, loader } from "./loader";

interface Pokemon {
    id: string;
    attack: number;
    defense: number;
}

interface BaseRecord {
    id: string;
}

interface Database<T extends BaseRecord> {
    set(newValue: T): void;
    get(id: string): T | undefined;
}

class InMemoryDB<T extends BaseRecord> implements Database<T> {
    private db: Record<string, T> = {};

    public set(newValue: T): void {
        this.db[newValue.id] = newValue;
    }
    get(id: string): T {
        return this.db[id]
    }
}

const pokemonDB = new InMemoryDB<Pokemon>();
pokemonDB.set({
    id: 'Bulbasaur',
    attack: 50,
    defense: 12,
});

console.log(pokemonDB.get('Bulbasaur'));