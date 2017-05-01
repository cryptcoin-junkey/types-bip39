declare class Wordlists {
    EN: any;
    JA: any;
    english: any;
    french: any;
    italian: any;
    japanese: any;
    spanish: any;
}

export declare function mnemonicToSeed(mnemonic: string, password?: string): Buffer;
export declare function mnemonicToSeedHex(mnemonic: string, password?: string): any;
export declare function mnemonicToEntropy(mnemonic: string, wordlist: any): any;
export declare function entropyToMnemonic(entropy: any, wordlist: any): any;
export declare function generateMnemonic(strength?: number, rng?: any, wordlist?: any): any;
export declare function validateMnemonic(mnemonic: string, wordlist?: any): boolean;
export declare var wordlists: Wordlists;