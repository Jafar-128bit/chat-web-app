import './home.css';
import {userData} from "../../data/data";
import {ChatContactCardTemplate, ChatInputTemplate, SearchBoxTemplate} from "../../template/IndexTemplate";
import {ChatCardType} from "../../types/types";

const Home = () => {

    const sortByIsPin = (arr: ChatCardType[]): ChatCardType[] => {
        return arr.sort((a: ChatCardType, b: ChatCardType) => {
            return Number(b.isPin) - Number(a.isPin);
        });
    };

    return <section className="home">
        <section className="home__section1">
            <section className="home__section1-1">
                <SearchBoxTemplate/>
            </section>
            <section className="home__section1-2 noScroll">
                {sortByIsPin(userData).map((value: ChatCardType, index: number) => <ChatContactCardTemplate
                        key={index}
                        userData={value}
                    />
                )}
            </section>
        </section>
        <section className="home__section2">
            <section className="home__section2-1">
                Chat Area Title Bar
            </section>
            <section className="home__section2-2">
                Chatting Area
            </section>
            <section className="home__section2-3">
                <ChatInputTemplate/>
            </section>
        </section>
    </section>
}

export default Home;