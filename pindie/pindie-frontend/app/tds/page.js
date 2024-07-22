"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";

export default function New() {
    const tds = useGetDataByCategory(endpoints.games, "TDS");

    return (
        <main className={"main-inner"}>
            {tds ? (
                <CardsListSection id="TDS" title="TDS" data={tds} />
            ) : (
                <Preloader />
            )}
        </main>
    );
}
