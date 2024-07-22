"use client";

import { Banner } from "./components/Banner/Banner";
import { CardsListSection } from "./components/CardsListSection/CardsListSection";
import { Promo } from "./components/Promo/Promo";
import { Preloader } from "../app/components/Preloader/Preloader";

import { useGetDataByCategory } from "../app/api/api-hooks";
import { endpoints } from "../app/api/config";

export default function Home() {
    const popularGames = useGetDataByCategory(endpoints.games, "popular");
    const newGames = useGetDataByCategory(endpoints.games, "new");
    return (
        <main className="main">
            <Banner />
            {popularGames ? (
                <CardsListSection
                    id="popular"
                    title="Популярные"
                    data={popularGames}
                    type="slider"
                />
            ) : (
                <Preloader />
            )}
            {newGames ? (
                <CardsListSection
                    id="new"
                    title="Новинки"
                    data={newGames}
                    type="slider"
                />
            ) : (
                <Preloader />
            )}
            <Promo />
        </main>
    );
}
