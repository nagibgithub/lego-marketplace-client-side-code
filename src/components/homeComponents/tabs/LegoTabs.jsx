import { useEffect, useState } from "react";
import TabLego from "./TabLego";

const LegoTabs = () => {

    const [tabValue, setTabValue] = useState(1);
    const [subTab, setSubTab] = useState(1);
    // console.log(subTab);

    const [legoData, setLegoData] = useState([]);

    useEffect(() => {
        fetch('https://b7a11-nagib-lego-server.vercel.app/legos_tab')
            .then(res => res.json())
            .then(data => setLegoData(data))
    }, []);

    // console.log(legoData);

    const legoCity = <>
        <div onClick={() => setSubTab(1)} className={`${subTab == 1 ? "sun-tab-active bg-sky-400 border-blue-700" : "sun-tab-inactive border-white"}`}>
            <h1>Train Setup</h1>
        </div>
        <div onClick={() => setSubTab(2)} className={`${subTab == 2 ? "sun-tab-active bg-sky-400 border-blue-700" : "sun-tab-inactive border-white"}`}>
            <h1>Road Setup</h1>
        </div>
        <div onClick={() => setSubTab(3)} className={`${subTab == 3 ? "sun-tab-active bg-sky-400 border-blue-700" : "sun-tab-inactive border-white"}`}>
            <h1>Constraction Setup</h1>
        </div>
    </>;

    const legoClassic = <>
        <div onClick={() => setSubTab(1)} className={`${subTab == 1 ? "sun-tab-active bg-red-400 border-red-700" : "sun-tab-inactive border-white"}`}>
            <h1>Bricks Box</h1>
        </div>
        <div onClick={() => setSubTab(2)} className={`${subTab == 2 ? "sun-tab-active bg-red-400 border-red-700" : "sun-tab-inactive border-white"}`}>
            <h1>Build Together</h1>
        </div>
        <div onClick={() => setSubTab(3)} className={`${subTab == 3 ? "sun-tab-active bg-red-400 border-red-700" : "sun-tab-inactive border-white"}`}>
            <h1>Fantasy Universe</h1>
        </div>
    </>;

    const legoMovie = <>
        <div onClick={() => setSubTab(1)} className={`${subTab == 1 ? "sun-tab-active bg-yellow-400 border-yellow-700" : "sun-tab-inactive border-white"}`}>
            <h1>Avater</h1>
        </div>
        <div onClick={() => setSubTab(2)} className={`${subTab == 2 ? "sun-tab-active bg-yellow-400 border-yellow-700" : "sun-tab-inactive border-white"}`}>
            <h1>Jurassic World</h1>
        </div>
        <div onClick={() => setSubTab(3)} className={`${subTab == 3 ? "sun-tab-active bg-yellow-400 border-yellow-700" : "sun-tab-inactive border-white"}`}>
            <h1>Maevel</h1>
        </div>
    </>;

    const trainLego = legoData.filter(pd => (pd.subCategory == "Train Setup"));
    const constructionLego = legoData.filter(pd => (pd.subCategory == "Constraction Setup"));
    const roadLego = legoData.filter(pd => (pd.subCategory == "Road Setup"));
    const bricksLego = legoData.filter(pd => (pd.subCategory == "Bricks Box"));
    const togetherLego = legoData.filter(pd => (pd.subCategory == "Build Together"));
    const fantasyLego = legoData.filter(pd => (pd.subCategory == "Fantasy Universe"));
    const avatarLego = legoData.filter(pd => (pd.subCategory == "Avatar"));
    const jurassicLego = legoData.filter(pd => (pd.subCategory == "Jurassic World"));
    const maevelLego = legoData.filter(pd => (pd.subCategory == "Maevel"));


    return (
        <>
            <div className="grid grid-cols-3 justify-center">
                <div onClick={() => setTabValue(1)} className={`${tabValue == 1 ? "tab-active border-sky-700 bg-sky-400 " : "tab-inactive"}`}>
                    <h1>Lego City</h1>
                </div>
                <div onClick={() => setTabValue(2)} className={`${tabValue == 2 ? "tab-active border-red-700 bg-red-400" : "tab-inactive"}`}>
                    <h1>Lego Classic</h1>
                </div>
                <div onClick={() => setTabValue(3)} className={`${tabValue == 3 ? "tab-active border-yellow-700 bg-yellow-400" : "tab-inactive"}`}>
                    <h1>Lego Movie</h1>
                </div>
            </div>
            <div className="grid grid-cols-3 justify-center border-t-2 border-green-700">
                {
                    tabValue == 1 ?
                        legoCity
                        :
                        tabValue == 2 ?
                            legoClassic
                            :
                            tabValue == 3 ?
                                legoMovie
                                :
                                <></>
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {
                    (tabValue == 1 && subTab == 1) ?
                        trainLego.map(lg => <TabLego key={lg._id} lego={lg}></TabLego>)
                        :
                        (tabValue == 1 && subTab == 2) ?
                            roadLego.map(lg => <TabLego key={lg._id} lego={lg}></TabLego>)
                            :
                            (tabValue == 1 && subTab == 3) ?
                                constructionLego.map(lg => <TabLego key={lg._id} lego={lg}></TabLego>)
                                :
                                (tabValue == 2 && subTab == 1) ?
                                    bricksLego.map(lg => <TabLego key={lg._id} lego={lg}></TabLego>)
                                    :
                                    (tabValue == 2 && subTab == 2) ?
                                        togetherLego.map(lg => <TabLego key={lg._id} lego={lg}></TabLego>)
                                        :
                                        (tabValue == 2 && subTab == 3) ?
                                            fantasyLego.map(lg => <TabLego key={lg._id} lego={lg}></TabLego>)
                                            :
                                            (tabValue == 3 && subTab == 1) ?
                                                avatarLego.map(lg => <TabLego key={lg._id} lego={lg}></TabLego>)
                                                :
                                                (tabValue == 3 && subTab == 2) ?
                                                    jurassicLego.map(lg => <TabLego key={lg._id} lego={lg}></TabLego>)
                                                    :
                                                    (tabValue == 3 && subTab == 3) ?
                                                        maevelLego.map(lg => <TabLego key={lg._id} lego={lg}></TabLego>)
                                                        :
                                                        <h1></h1>
                }
            </div>
        </>
    );
};

export default LegoTabs;