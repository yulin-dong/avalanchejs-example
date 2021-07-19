import {
    Avalanche
} from "avalanche"
import {
    AVMAPI,
    KeyChain
} from "avalanche/dist/apis/avm"

const ip: string = 'localhost'
const port: number = 9650
const protocol: string = 'http'
const networkID: number = 12345
const avalanche: Avalanche = new Avalanche(ip, port, protocol, networkID)
const xchain: AVMAPI = avalanche.XChain()

const main = async (): Promise<any> => {
    const keyChain: KeyChain = xchain.keyChain()
    console.log(keyChain)
}

main()
