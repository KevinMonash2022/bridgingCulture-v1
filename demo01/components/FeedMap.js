import React, { useEffect, useRef, useState } from 'react';
import { Loader } from "@googlemaps/js-api-loader";
import Image from 'next/image';

export default function Feed() {
    const mapRef = useRef(null);
    const autoCompleteInputRef = useRef(null);
    const [map, setMap] = useState(null);
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        const loader = new Loader({
            apiKey: "AIzaSyC22XFrVZl0B98u1UevZKpgkmw5He7a6jo",
            version: "weekly",
            libraries: ["places"]
        });

        loader.load().then(() => {
            if (typeof google !== "undefined") {
                const mapInstance = new google.maps.Map(mapRef.current, {
                    center: { lat: -37.8136, lng: 144.9631 },
                    zoom: 12,
                });
                setMap(mapInstance);

                const autoComplete = new google.maps.places.Autocomplete(autoCompleteInputRef.current);
                autoComplete.bindTo("bounds", mapInstance);
                autoComplete.setFields(["place_id", "geometry", "name", "formatted_address", "photos"]);
                autoComplete.addListener("place_changed", () => {
                    const place = autoComplete.getPlace();
                    if (!place.geometry) {
                        window.alert("No details available for input: '" + place.name + "'");
                        return;
                    }
                    clearMarkers();
                    mapInstance.setCenter(place.geometry.location);
                    mapInstance.setZoom(17);
                    addMarker(place);
                });
            }
        });
    }, []);

    const searchPlaces = (category) => {
        const request = {
            location: map.getCenter(),
            radius: '5000',
            type: category !== 'beach' ? [category] : undefined,
            keyword: category === 'beach' ? 'beach' : undefined,
        };

        const service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                clearMarkers();
                results.forEach(place => {
                    addMarker(place);
                });
            }
        });
    };

    const addMarker = (place) => {
        const marker = new google.maps.Marker({
            map,
            position: place.geometry.location,
            title: place.name,
        });

        const infoWindow = new google.maps.InfoWindow({
            content: generateContentString(place),
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });

        setMarkers(current => [...current, marker]);
    };

    const clearMarkers = () => {
        markers.forEach(marker => marker.setMap(null));
        setMarkers([]);
    };

    const generateContentString = (place) => {
        let contentString = `<div><h3>${place.name}</h3><p>${place.formatted_address || ''}</p>`;
        if (place.photos && place.photos.length > 0) {
            const photoUrl = place.photos[0].getUrl({ maxWidth: 200, maxHeight: 200 });
            contentString += `<img src="${photoUrl}" alt="Place image" style="width: 100%; margin-top: 5px;">`;
        }
        contentString += `</div>`;
        return contentString;
    };

    const handleCategoryChange = (event) => {
        searchPlaces(event.target.value);
    };

    return (

        <div className="container mx-auto my-4 p-4 flex-grow min-h-screen">

            <div className="flex flex-col md:flex-row">
                {/* left */}
                <div className="w-full md:w-1/4 p-4 bg-[#FFE7DF] rounded-lg ">
                    <div className="mb-4">
                        {/* <div className="flex items-center justify-center bg-[#EF7B7B] h-10 w-10 rounded-full mb-4">
                            <img src="/pics/dt-icon-search.svg" alt="Search" className='h-6 w-6' />

                        </div> */}
                        <div className="flex items-center justify-center bg-[#EF7B7B] h-10 w-10 rounded-full mb-4">
                            <div className="relative h-6 w-6">
                                <Image
                                    src="/pics/dt-icon-search.svg"
                                    alt="Search"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>

                        <input
                            ref={autoCompleteInputRef}
                            type="text"
                            placeholder="Enter Post Code/Suburb..."
                            className="w-full p-2 rounded-md border-2 border-gray-200"
                        />
                    </div>

                    <div className="flex flex-col">
                        <div className="text-lg font-semibold mb-2">Filter</div>
                        {['restaurant', 'beach', 'supermarket', 'landmark'].map((category) => (
                            <label key={category} htmlFor={category} className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    id={category}
                                    name="category"
                                    value={category}
                                    onChange={handleCategoryChange}
                                    className="mr-2"
                                />
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </label>
                        ))}
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={clearMarkers}
                        >
                            Clear All
                        </button>
                    </div>
                </div>

                {/* map */}
                <div className="w-full md:w-3/4 p-4">
                    <div className="h-96" ref={mapRef}>
                        Loading Map...
                    </div>
                </div>
            </div>
        </div>
    );
}
