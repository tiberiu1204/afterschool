import "./Location.css";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import Button from "./Button";

const Location = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <section className="section grey">
      <div className="section-triangles-transition primary"></div>
      <div className="section-container">
        <div className="section-layout-container collumn-layout">
          <h1 className="section-title">Locație</h1>
          <h2 className="address-title">Adresă</h2>
          <div className="underline dark"></div>
          <p className="adress description">
            Strada Poporului 201, Constanța 900178
          </p>
          <Button
            text="Deschide în Google Maps"
            link="http://maps.google.com/?q=Stelute Curcubeu"
            style="primary"
            target="_blank"
          />
          <div className="google-map-container">
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

const Map = () => {
  return (
    <GoogleMap
      zoom={18}
      center={{ lat: 44.17937, lng: 28.62999 }}
      mapContainerClassName="map-container"
    >
      <MarkerF
        title="Stelute Curcubeu"
        position={{ lat: 44.17937, lng: 28.62999 }}
      />
    </GoogleMap>
  );
};

export default Location;
