import herobannerimage from "../../assets/images/HeroBanner.jpg"
export const HeroBannerSection = () => {
    return (
        <div style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url(${herobannerimage})`,
            backgroundPosition: "center",
            width: "100%",
            height: "45vh",
            backgroundSize: "cover",
            display: "flex"
            , justifyContent: "center"
            , alignItems: "center"
        }}>
            <h1 style={{
                color: "white",
                textAlign: "center"
            }}>
                Find the Perfect Credit or Debit Card - Compare and Choose Your Best Fit
            </h1>
        </div>
    )
}
