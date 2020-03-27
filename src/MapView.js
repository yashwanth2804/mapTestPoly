import React from "react";
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  Polyline,
  CircleMarker
} from "react-leaflet";

class MapView extends React.Component {
  state = {
    lat: 51.315,
    lng: -0.09,
    zoom: 13,
    positions: [
      {
        lat: 51.315,
        lng: -0.09,
        zoom: 13
      },
      {
        lat: 51.305,
        lng: -0.09,
        zoom: 13
      },
      {
        lat: 51.325,
        lng: -0.09,
        zoom: 13
      }
    ],
    positions1: [
      {
        lat: 50.315,
        lng: -0.99,
        zoom: 13
      },
      {
        lat: 50.305,
        lng: -0.99,
        zoom: 13
      },
      {
        lat: 50.325,
        lng: -0.99,
        zoom: 13
      }
    ]
  };

  componentDidMount() {}
  zoomOut = () => {
    const map = this.mapRef.current;
    if (map != null) {
      map.leafletElement.zoomOut();
    }
  };
  zoomOut() {
    alert("zoomOut");
    window.map = this.map;
    this.map.setZoom(0);
    //this.setState({ ...this.state, zoom: this.state.zoom - 1 });
  }

  renderPositions(positions) {
    return (
      <>
        <Polyline color="#220bb9" positions={positions} />
        <Polyline color="red" positions={positions} />
        {positions.map((position, index) => (
          <CircleMarker
            key={index}
            center={position}
            fill={true}
            color="#220bb9"
            radius={3}
          >
            <Popup>
              <b>lat:</b> {position.lat} <br />
              <b>lng:</b> {position.lng} <br />
            </Popup>
          </CircleMarker>
        ))}
      </>
    );
  }
  render() {
    const center = { lat: 51.515, lng: -0.09 };
    const positions = [
      { lat: 51.505, lng: -0.09 },
      { lat: 51.51, lng: -0.1 },
      { lat: 51.51, lng: -0.12 }
    ];
    return (
      <Map
        onContextmenu={() => this.zoomOut()}
        center={center}
        zoom={this.state.zoom}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
          <Popup>
            <b>lat:</b> {center.lat} <br />
            <b>lng:</b> {center.lng} <br />
          </Popup>
          <Tooltip direction="auto" offset={[0, 10]} opacity={1}>
            toolTip
          </Tooltip>
        </Marker>
        {this.renderPositions(positions)}
        {this.renderPositions(this.state.positions1)}
      </Map>
    );
  }
}

export default MapView;
