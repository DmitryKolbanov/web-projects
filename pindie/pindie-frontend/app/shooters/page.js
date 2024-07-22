"use client";

import { useGetDataByCategory } from "../api/api-hooks";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { CardsListSection } from "../components/CardsListSection/CardsListSection";

export default function Shooters() {
    const shooters = useGetDataByCategory(endpoints.games, "shooter");

    return (
        <main className={"main-inner"}>
            {shooters ? (
                <CardsListSection id="shooter" title="Шутеры" data={shooters} />
            ) : (
                <Preloader />
            )}
        </main>
    );
}
