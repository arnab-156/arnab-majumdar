'use client'

import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
import type { NextPage } from 'next';

interface MyComponentProps {

}

type Player = "X" | "O"

export const TicTacToe: NextPage<MyComponentProps> = () => {
    const [tttList, setTttList] = useState(
        [
            "", "", "",
            "", "", "",
            "", "", ""
        ]
    );

    const [winner, setWinner] = useState<Player | false>(false);

    const fPlayer: Player = "X";
    const sPlayer: Player = "O"

    const [currPlayer, setPlayer] = useState<Player>(fPlayer);

    const handleTileClick = (item: string, index: number, player: Player) => {

        if (item === "" && !winner) {
            const newTTLArray = tttList;
            newTTLArray[index] = player;
            setTttList(newTTLArray);
            setPlayer(player === fPlayer ? sPlayer : fPlayer)
            didYouWin(newTTLArray);
        }
    };

    useEffect(() => {
        didYouWin(tttList);
    }, [tttList])

    useEffect(() => {
    }, [winner !== false])

    const allEqual = (a: string | Player, b: string | Player, c: string | Player): boolean => a === b && b === c;

    const allEqualForNonEmpty = (a: string | Player, b: string | Player, c: string | Player) => {
        if (a === "" && b === "" || b === "" && c === "" || c === "" && a === "") {
            return false;
        }
        return allEqual(a, b, c);
    }
    const permutation1 = allEqualForNonEmpty(tttList[0], tttList[1], tttList[2])
    const permutation2 = allEqualForNonEmpty(tttList[0], tttList[3], tttList[6])
    const permutation3 = allEqualForNonEmpty(tttList[0], tttList[4], tttList[8])
    const permutation4 = allEqualForNonEmpty(tttList[3], tttList[4], tttList[5])
    const permutation5 = allEqualForNonEmpty(tttList[2], tttList[5], tttList[8])
    const permutation6 = allEqualForNonEmpty(tttList[6], tttList[7], tttList[8])
    const permutation7 = allEqualForNonEmpty(tttList[2], tttList[4], tttList[6])

    function anyAnyisTrue(...args: boolean[]) {
        return [...args].some(func => func === true);
    }

    const didYouWin = (tttList: string[]) => {
        if (tttList.filter(el => el === "").length < 5) {
            const winner = anyAnyisTrue(permutation1, permutation2, permutation3, permutation4, permutation5, permutation6, permutation7)

            if (winner) {
                setWinner(currPlayer)
            }
        }
    };

    return (
        <div className="w-full max-width-500 h-screen bg-gray-200 p-4 rounded shadow-md hover:bg-gray-300 active:bg-gray-400">
            <h3 className="font-bold text-overflow-ellipsis overflow-hidden line-clamp-1">Click to start</h3>
            {
                winner !== false && (
                    <div>
                        <h1> Winner has been Declared! {winner} </h1>
                    </div>
                )
            }
            <div className="grid h-1/4 grid-cols-3 grid-rows-3 gap-0">

                {
                    tttList.map((item, index) => (
                        <button
                            onClick={() => handleTileClick(item, index, currPlayer)}
                            className="border shadow-md hover:bg-gray-400"
                        >
                            {item}
                        </button>
                    ))
                }
            </div>
        </div>
    );
}
