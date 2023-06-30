import Image from 'next/image'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function DApp() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* - PROJECT STAFF - */}
            <div
                className="text-gray-700 dark:text-white
            mt-16 flex flex-row space-x-6 justify-center items-center font-rubik-glitch text-[36px] leading-[36px]"
            >
                <div>0XCHAMPI,</div>
                <div>ERC721_HOLDER,</div>
                <div>WETCIRCLE</div>
            </div>
            {/* - CHAINLINK HACKATON - */}
            <a href="https://devpost.com/software/wall-eth">
                <div
                    className="text-gray-700 dark:text-white
            mt-12 flex flex-col justify-center items-center font-chakra-petch font-semibold text-[80px] leading-[80px]"
                >
                    <div className="text-[80px] leading-[60px]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E032F3] to-[#9F87E2]">
                            CHAIN
                        </span>
                        .LINK
                    </div>
                    <div className="text-[88px] leading-[68px] ">
                        FALL{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9F87E2] to-[#5CC4DE]">
                            2022
                        </span>
                    </div>
                    <div className="text-[84px] leading-[64px]">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E032F3] to-[#9F87E2]">
                            HACK
                        </span>
                        ATON
                    </div>
                </div>
            </a>
            {/* - WALL-ETH LOGO - */}
            <a href="https://devpost.com/software/wall-eth">
                <div className="mt-16 flex flex-row justify-center items-center">
                    <div className="relative w-96 h-96">
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <Image
                            className="absolute z-10 top-0 left-0"
                            src={'/images/spiral-galaxy-1.png'}
                            width={384}
                            height={384}
                        />
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <Image
                            className="absolute z-20 top-[25px] left-[50px]"
                            src={'/images/wall-eth-logo-2.png'}
                            width={283}
                            height={175}
                        />
                        <div
                            className="absolute z-40 top-[208px] left-0 h-16 w-96
                    flex flex-row justify-center items-center"
                        >
                            <div className="flex flex-row justify-center items-center pr-[8px] pt-[8px] dark:bg-[#D0D2D4] bg-[#202628] rounded-[18px]">
                                <div className="dark:text-black text-gray-200 text-[56px] leading-[56px] py-[4px] px-[8px] rounded-t-[12px] rounded-bl-[12px] ">
                                    WALL -
                                </div>
                                <div className="ml-[8px] text-[#202628] dark:text-[#D0D2D4] text-[56px] leading-[56px] py-[4px] px-[8px] rounded-t-[12px] bg-gradient-to-r from-[#895EE7] to-[#6589E6]">
                                    ETH
                                </div>
                            </div>
                        </div>
                        <div className="absolute z-30 top-[260px] left-0 h-14 w-96 rounded-full dark:bg-[#D0D2D4] bg-[#202628]"></div>
                        <div
                            className="absolute z-40 top-[260px] left-0 h-14 w-96
                    flex flex-row justify-center items-center"
                        >
                            <div className="text-[#202628] dark:text-[#D0D2D4] text-[19px] leading-[19px] py-[7px] pl-[8px] rounded-l-full bg-gradient-to-r from-[#E032F3] to-[#895EE7]">
                                ON-CHAIN TRADING WITH O
                            </div>
                            <div className="text-[#202628] dark:text-[#D0D2D4] text-[19px] leading-[19px] py-[7px] pr-[8px] rounded-r-full bg-gradient-to-r from-[#895EE7] to-[#6589E6]">
                                FF-CHAIN DATA
                            </div>
                        </div>
                    </div>
                </div>
            </a>

            {/* - ABOUT - */}
            <div className="mt-40 w-full px-36 flex flex-row justify-center items-end">
                <div className="w-full flex flex-col justify-start items-start text-gray-700 dark:text-white">
                    {/* TITLE */}
                    <div className="font-rubik-glitch text-[36px] leading-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#E032F3] to-[#5CC4DE]">
                        LET ME TELL YOU
                    </div>
                    <div className="font-chakra-petch font-semibold text-[60px] leading-[54px] text-gray-700 dark:text-white">
                        ABOUT MY SELF
                    </div>
                    {/* #1 PARAGRAPH */}
                    <div className="mt-14 font-rubik-glitch text-[30px] leading-[30px]">
                        WHAT IS WALL-ETH?
                    </div>
                    <div className="mt-2 font-chakra-petch font-semibold text-xl leading-5 text-gray-600 dark:text-gray-300">
                        Wall-Eth is a fully{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#E032F3] to-[#5CC4DE]">
                            On-Chain
                        </span>{' '}
                        Algorithmic Trading bot that leverages real world data provided by{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#E032F3] to-[#5CC4DE]">
                            Truflation
                        </span>{' '}
                        to change the orderSize of the cryptocurrency purchase by adjusting it to
                        the current value of the inflation index. For the purposes of the Hackathon,
                        we have implemented a{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#E032F3] to-[#5CC4DE]">
                            DCA
                        </span>{' '}
                        strategy to demonstrate its functionality. If the macro conditions imply
                        fear and high inflation, Wall-ETH makes a larger purchase.
                    </div>
                    {/* #2 PARAGRAPH */}
                    <div className="mt-10 font-rubik-glitch text-[30px] leading-[30px]">
                        WHY USE WALL-ETH?
                    </div>
                    <div className="mt-2 font-chakra-petch font-semibold text-xl leading-5 text-gray-600 dark:text-gray-300">
                        The reason is pretty straightforward: Wall-ETH is completely{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#E032F3] to-[#5CC4DE]">
                            On-Chain
                        </span>
                        ! This total decentralization translates into greater security and
                        transparency for the user, and it also removes the need to trust a
                        centralized exchange as everything is done on the public ledger (Ethereum &
                        Polygon). By leveraging{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#E032F3] to-[#5CC4DE]">
                            Truflation
                        </span>{' '}
                        and{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#E032F3] to-[#5CC4DE]">
                            Chainlink
                        </span>{' '}
                        , we can adjust its behavior using accurate, independent and censorship
                        resistant off-chain data. As we scale, this can have impactful implications
                        in modeling an edge in data provision beyond the markets.
                    </div>
                    {/* #3 PARAGRAPH */}
                    <div className="mt-10 font-rubik-glitch text-[30px] leading-[30px]">
                        WHAT&aposS NEXT?
                    </div>
                    <div className="mt-2 font-chakra-petch font-semibold text-xl leading-5 text-gray-600 dark:text-gray-300">
                        As we further develop Wall-ETH, we will be able to incorporate YoY
                        Inflation,{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#E032F3] to-[#5CC4DE]">
                            CPI
                        </span>
                        , Consumer Sentiment Index, Cost of Gas, Precious Metals, and more to give a
                        greater edge in the market when deciding the OrderSize of your DCA purchase,
                        or even{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#E032F3] to-[#5CC4DE]">
                            Algorithmic-Trading
                        </span>{' '}
                        and MeV strategies. Approving the TX will also give you a dynamic{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#E032F3] to-[#5CC4DE]">
                            NFT
                        </span>{' '}
                        that changes mood based on the same data and represents your stake. This can
                        be expanded to many use-cases within many industries such as housing,
                        lending, gaming, big data, and more.
                    </div>
                </div>
                <Image
                    className="dark:filetr dark:brightness-110"
                    src={'/images/wall-eth-about.png'}
                    width={450}
                    height={600}
                />
            </div>

            {/* - GRAPH TITLE - */}
            <div className="mt-32 pl-36 w-full flex flex-row justify-start items-center translate-y-20">
                <div className="flex flex-col">
                    <div className="w-fit font-rubik-glitch text-[36px] leading-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#E032F3] to-[#5CC4DE]">
                        UNDERNEATH
                    </div>
                    <div className="font-chakra-petch font-semibold text-[60px] leading-[54px] text-gray-700 dark:text-white">
                        THE HOOD
                    </div>
                </div>
            </div>
            {/* - GRAPH - */}
            <div className="w-full flex flex-row justify-end items-center">
                {/* RELATIVE CANVAS */}
                <div className="relative w-[1333px] h-[768px]">
                    {/* BACKGROUND */}
                    <div className="absolute z-20 top-1/2 left-[480px] translate-y-[-296px] opacity-[15%] dark:opacity-10 filter blur-[2px]">
                        <Image src={'/graph/spiral-galaxy.png'} width={768} height={768} />
                    </div>
                    {/* UNISWAP FLOATING PART */}
                    <div className="absolute z-30 top-[140px] left-[544px] flex flex-col justify-center items-center">
                        <Image src={'/graph/uniswap.png'} width={96} height={96} alt="" />
                        <div className="mt-1 font-chakra-petch text-lg font-extrabold text-black dark:text-white">
                            UNISWAP
                        </div>
                        {/* DIAGONAL-ARROW */}
                        <div
                            className="w-[112px] flex flex-col justify-center items-center
                                    rotate-45 translate-x-[128px] translate-y-[8px]"
                        >
                            {/* TOKEN SYMBOLS */}
                            <div className="relative h-8 w-16 -translate-x-[12px]">
                                <Image
                                    className="z-40 absolute top-0 left-[0px]"
                                    src={'/graph/btc-token.png'}
                                    width={32}
                                    height={32}
                                    alt=""
                                />
                                <Image
                                    className="z-30 absolute top-0 left-[18px]"
                                    src={'/graph/eth-token.png'}
                                    width={32}
                                    height={32}
                                    alt=""
                                />
                                <Image
                                    className="z-20 absolute top-0 left-[32px]"
                                    src={'/graph/matic-token.png'}
                                    width={32}
                                    height={32}
                                    alt=""
                                />
                            </div>
                            <div className="flex flex-row justify-center items-center">
                                <div className="h-[3px] w-[112px] bg-black dark:bg-white"></div>
                                <div className="h-[12px] w-[12px] border-t-[3px] border-r-[3px] border-black dark:border-white rotate-45 translate-x-[-12px]"></div>
                            </div>
                            {/* BTD SYMBOL */}
                            <div className="-translate-x-[12px] font-chakra-petch text-xs font-bold text-gray-700 dark:text-gray-300">
                                TRADED COIN
                            </div>
                        </div>
                    </div>
                    {/* MAIN ORIZONTAL PART */}
                    <div className="absolute z-30 top-1/2 left-[0px] flex flex-row justify-center items-center translate-y-[-256px]">
                        <div className="flex flex-col justify-center items-center">
                            <Image src={'/graph/stats.png'} width={96} height={96} alt="" />
                            <div className="mt-1.5 font-chakra-petch text-lg font-extrabold text-black dark:text-white">
                                REAL WORLD DATA
                            </div>
                            <div className="mt-0 font-chakra-petch text-lg leading-5 font-extrabold text-gray-700 dark:text-gray-300">
                                (off-chain)
                            </div>
                        </div>
                        {/* RIGHT-ARROW */}
                        <div className="flex flex-row justify-center items-center">
                            <div className="h-[3px] w-[64px] ml-3 bg-black dark:bg-white"></div>
                            <div className="h-[12px] w-[12px] mr-3 border-t-[3px] border-r-[3px] border-black dark:border-white rotate-45 translate-x-[-12px]"></div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                className="rounded-lg"
                                src={'/graph/truflation-logo-2.jpeg'}
                                width={96}
                                height={96}
                                alt=""
                            />
                            <div className="mt-2 font-chakra-petch text-lg font-extrabold text-black dark:text-white px-2">
                                TRUFLATION
                            </div>
                        </div>
                        {/* RIGHT-ARROW */}
                        <div className="flex flex-row justify-center items-center">
                            <div className="h-[3px] w-[64px] ml-3 bg-black dark:bg-white"></div>
                            <div className="h-[12px] w-[12px] mr-1 border-t-[3px] border-r-[3px] border-black dark:border-white rotate-45 translate-x-[-12px]"></div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image
                                src={'/graph/chainlink-node.png'}
                                width={96}
                                height={96}
                                alt=""
                            />
                            <div className="mt-2 font-chakra-petch text-lg leading-5 font-extrabold text-black dark:text-white px-4">
                                CHAINLINK
                            </div>
                            <div className="mt-0 font-chakra-petch text-lg leading-5 font-extrabold text-black dark:text-white">
                                ORACLE
                            </div>
                        </div>
                        {/* RIGHT-ARROW */}
                        <div className="flex flex-row justify-center items-center">
                            <div className="h-[3px] w-[64px] ml-3 bg-black dark:bg-white"></div>
                            <div className="h-[12px] w-[12px] mr-3 border-t-[3px] border-r-[3px] border-black dark:border-white rotate-45 translate-x-[-12px]"></div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            {/* LEFT-ARROW */}
                            <div className="relative h-[12px] w-[112px]">
                                <div className="absolute top-0 left-0 flex flex-row justify-center items-center translate-y-[54px] translate-x-[-116px]">
                                    <div className="h-[12px] w-[12px] border-t-[3px] border-r-[3px] border-black dark:border-white rotate-[225deg] translate-x-[12px]"></div>
                                    <div className="h-[3px] w-[112px] bg-black dark:bg-white"></div>
                                </div>
                                {/* USDT SYMBOL */}
                                <div className="w-full absolute top-0 left-0 translate-y-[24px] translate-x-[-100px] flex flex-col justify-center items-center">
                                    <div className="relative h-8 w-16">
                                        <div className="z-40 absolute top-0 left-0">
                                            <Image
                                                src={'/graph/usdt-token.png'}
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                        <div className="z-30 h-8 w-8 absolute top-0 left-[16px] flex justify-center items-center">
                                            <Image
                                                className="filter brightness-105"
                                                src={'/graph/dai-token.png'}
                                                width={23}
                                                height={23}
                                            />
                                        </div>
                                        <div className="z-20 absolute top-0 left-[32px]">
                                            <Image
                                                className="filter brightness-110"
                                                src={'/graph/usdc-token.png'}
                                                width={32}
                                                height={32}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-[10px] font-chakra-petch text-xs font-bold text-gray-700 dark:text-gray-300">
                                        STABLE COIN
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                <Image
                                    src={'/graph/order-size.png'}
                                    width={80}
                                    height={80}
                                    alt=""
                                />
                                <div className="mt-1 font-chakra-petch font-extrabold text-black dark:text-white">
                                    ORDER SIZE
                                </div>
                            </div>
                            {/* UP-ARROW */}
                            <div className="flex flex-col justify-center items-center">
                                <div className="h-[12px] w-[12px] mt-1 border-t-[3px] border-r-[3px] border-black dark:border-white -rotate-45 translate-y-[12px]"></div>
                                <div className="w-[3px] h-[56px] mb-5 bg-black dark:bg-white"></div>
                            </div>
                            <Image
                                src={'/graph/wall-eth-logo-blue.png'}
                                width={256}
                                height={256}
                                alt=""
                            />
                            <div className="mt-2 flex flex-row justify-center items-center translate-x-[-0px]">
                                <div className="flex flex-col justify-center items-center translate-x-[-16px]">
                                    <Image
                                        src={'/graph/smart-contracts.png'}
                                        width={96}
                                        height={96}
                                        alt=""
                                    />
                                    <div className="mt-1 font-chakra-petch text-lg font-extrabold text-black dark:text-white">
                                        SMART CONTRACT
                                    </div>
                                </div>
                                <div className="mt-4 flex flex-col justify-center items-center translate-x-[32px]">
                                    <Image
                                        src={'/graph/algorithm.png'}
                                        width={96}
                                        height={96}
                                        alt=""
                                    />
                                    <div className="mt-1.5 font-chakra-petch text-lg font-extrabold text-black dark:text-white">
                                        TRADING ALGORITHM
                                    </div>
                                    <div className="font-chakra-petch text-lg leading-5 font-extrabold text-gray-700 dark:text-gray-300">
                                        (d.c.a.)
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* RIGHT-ARROW */}
                        <div className="flex flex-row justify-center items-center">
                            <div className="h-[3px] w-[96px] ml-4 bg-black dark:bg-white"></div>
                            <div className="h-[12px] w-[12px] mr-4 border-t-[3px] border-r-[3px] border-black dark:border-white rotate-45 translate-x-[-12px]"></div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Image src={'/graph/3d-money.webp'} width={132} height={132} alt="" />
                            <div className="font-chakra-petch text-lg font-extrabold text-black dark:text-white">
                                PROFITS
                            </div>
                        </div>
                    </div>
                </div>
                {/* RIGHT-PADDING */}
                <div className="w-24"></div>
            </div>

            {/* - FREE NFTS - */}
            <div className="mt-40 px-36 w-full flex flex-col justify-center items-center">
                {/* TITLE */}
                <div className="w-full flex flex-row justify-start items-center">
                    <div className="flex flex-col">
                        <div className="w-fit font-rubik-glitch text-[36px] leading-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#E032F3] to-[#5CC4DE]">
                            STAKE INTO WALL-ETH
                        </div>
                        <div className="font-chakra-petch font-semibold text-[60px] leading-[54px] text-gray-700 dark:text-white">
                            TO GET A DYNAMIC NFT
                        </div>
                    </div>
                </div>
                {/* NFTS IMAGE */}
                <div className="mt-24 w-full px-20 flex flex-row justify-between items-center">
                    {/* robot-blu */}
                    <div className="flex flex-col border-2 border-gray-700 dark:border-gray-300 rounded-[10px]">
                        <Image
                            className="mx-6 my-12"
                            src={'/graph/robot.png'}
                            width={192}
                            height={192}
                            alt=""
                        />
                        <div
                            className="h-20 w-full flex flex-col justify-center items-center bg-[#92D2E6] rounded-b-lg
                                border-t-2 border-gray-700 dark:border-gray-300 text-gray-700 dark:text-black"
                        >
                            <div>
                                YOY INFLATION IS <span className="text-sky-700">&#60; 3%</span>
                            </div>
                            <div>DOLLAR COST AVERAGING</div>
                            <div>33% EVERY FRIDAY</div>
                        </div>
                    </div>
                    {/* robot-yellow */}
                    <div className="flex flex-col border-2 border-gray-700 dark:border-gray-300 rounded-[10px]">
                        <Image
                            className="mx-6 my-12"
                            src={'/graph/robot-yellow.png'}
                            width={192}
                            height={192}
                            alt=""
                        />
                        <div
                            className="h-20 w-full flex flex-col justify-center items-center bg-[#ECDAA8] rounded-b-lg
                                border-t-2 border-gray-700 dark:border-gray-300 text-gray-700 dark:text-black"
                        >
                            <div>
                                YOY INFLATION IS{' '}
                                <span className="text-amber-700">&#62; 3% &#60; 7%</span>
                            </div>
                            <div>DOLLAR COST AVERAGING</div>
                            <div>66% EVERY FRIDAY</div>
                        </div>
                    </div>
                    {/* robot-red */}
                    <div className="flex flex-col border-2 border-gray-700 dark:border-gray-300 rounded-[10px]">
                        <Image
                            className="mx-6 my-12"
                            src={'/graph/robot-red.png'}
                            width={192}
                            height={192}
                            alt=""
                        />
                        <div
                            className="h-20 w-full flex flex-col justify-center items-center bg-[#DB748B] rounded-b-lg
                                border-t-2 border-gray-700 dark:border-gray-300 text-gray-700 dark:text-black"
                        >
                            <div>
                                YOY INFLATION IS <span className="text-pink-800">&#62; 7%</span>
                            </div>
                            <div>DOLLAR COST AVERAGING</div>
                            <div>99% EVERY FRIDAY</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* - LAUNCH APP - */}
            <div className="mt-60 px-36 w-full flex flex-row justify-between items-center">
                <div className="flex flex-col justify-center items-start mr-32 text-gray-700 dark:text-white">
                    <div className="font-rubik-glitch text-[40px] leading-[40px]">
                        LET US GIVE YOU A
                    </div>
                    <div className="font-chakra-petch font-semibold text-[72px] leading-[72px] translate-x-[-4px]">
                        DEMONSTRATION
                    </div>
                </div>
                <div className="w-full flex flex-row justify-center items-center">
                    <Link href={'/dapp'}>
                        <div
                            className="relative h-[68px] w-[164px] rounded-lg
                    bg-gradient-to-r from-[#E032F3] to-[#5CC4DE]"
                        >
                            <div
                                className="absolute top-[8px] left-[8px] h-16 w-40 flex flex-row justify-center items-center 
                    rounded-lg bg-gray-200 dark:bg-gray-800 border-b border-r dark:border-white border-gray-900 text-gray-900 dark:text-white
                    transition ease-in-out delay-75 hover:translate-x-[-6px] hover:translate-y-[-6px] hover:border-0 hover:filter hover:brightness-110"
                            >
                                <div className="text-xl">LAUNCH</div>
                                <RocketLaunchIcon className="w-8 h-8 ml-2" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            {/* - SPONSOR LOGOS - */}
            <div className="relative h-32 mt-60">
                {/* TRUFLATION */}
                <div className="absolute top-[1px] left-1/2 translate-x-[-96px] w-[192px] h-[108px] flex flex-row justify-center items-center">
                    <a href="https://truflation.com/">
                        <Image
                            className="filter dark:brightness-[175%]"
                            src={'/images/truflation-logo.svg'}
                            width={192}
                            height={108}
                        />
                    </a>
                </div>
                {/* CHAINLINK */}
                <div className="absolute top-0 left-1/2 translate-x-[-380px] w-[104px] h-[110px] flex flex-row justify-center items-center">
                    <a href="https://chain.link/">
                        <Image
                            className="filter dark:brightness-90"
                            src={'/images/chainlink-logo.png'}
                            width={104}
                            height={110}
                        />
                    </a>
                </div>
                {/* POLYGON */}
                <div className="absolute top-[32px] left-1/2 translate-x-[226px] w-[204px] h-[45px] flex flex-row justify-center items-center">
                    <a href="https://polygon.technology/">
                        <Image
                            className="filter dark:brightness-150"
                            src={'/images/polygon-logo.png'}
                            width={60}
                            height={45}
                        />
                    </a>
                    <a href="https://polygon.technology/">
                        <Image
                            className="filter invert dark:invert-0 dark:brightness-150"
                            src={'/images/polygon-logo-2.png'}
                            width={145}
                            height={45}
                        />
                    </a>
                </div>
            </div>
            {/* - BOTTOM PADDING - */}
            <div className="h-32"></div>
        </div>
    )
}
