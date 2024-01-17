import CardCar from "../../components/CardCar";
import CommentCard from "../../components/CommentCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Catalog(){

    return (
        <>
            <Header />
                <main className="ct-catalog-main">
                    <section id="ct-catalog-section" className="ct-container">
                       <div className="ct-catalog-cards-container">
                            <div className="ct-container">
                                 <h5>Venha nos visitar</h5> 
                        </div>
                         <CardCar />
                         <CardCar />
                       </div>
                       </section>
                </main>
                <CommentCard />
            <Footer />
        </>
    );
}