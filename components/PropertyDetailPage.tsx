import React, { useState } from 'react';
import { Property } from '../types';
import SimplePropertyMap from './SimplePropertyMap';

interface PropertyDetailPageProps {
    property: Property;
    onBack: () => void;
}

const PropertyDetailPage: React.FC<PropertyDetailPageProps> = ({ property, onBack }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(property.mainPhotoIndex || 0);
    
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(price);
    };
    const displayPrice = property.operationType.includes('Renta') && (property.rentPrice ?? 0) > 0
        ? formatPrice(property.rentPrice as number)
        : formatPrice(property.price);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
    };

    const selectImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <button onClick={onBack} className="mb-8 text-inverland-blue font-semibold hover:underline">
                    &larr; Volver a la lista
                </button>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Image Carousel */}
                        <div className="space-y-4">
                            {/* Main Image with Navigation */}
                            <div className="relative group">
                                <img 
                                    src={(() => { const s = property.images[currentImageIndex]; return s && (s.startsWith('http') || s.startsWith('data:')) ? s : 'https://picsum.photos/1200/800?grayscale'; })()} 
                                    alt={property.title} 
                                    className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-lg" 
                                />
                                
                                {/* Navigation Arrows */}
                                {property.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                            aria-label="Imagen anterior"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                            aria-label="Imagen siguiente"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </>
                                )}
                                
                                {/* Image Counter */}
                                {property.images.length > 1 && (
                                    <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                                        {currentImageIndex + 1} / {property.images.length}
                                    </div>
                                )}
                            </div>
                            
                            {/* Thumbnail Gallery */}
                            {property.images.length > 1 && (
                                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                                    {property.images.map((img, index) => (
                                        <img 
                                            key={index} 
                                            src={(img && (img.startsWith('http') || img.startsWith('data:'))) ? img : 'https://picsum.photos/300/200?grayscale'} 
                                            alt={`${property.title} ${index + 1}`} 
                                            className={`w-full h-16 sm:h-20 object-cover rounded-md cursor-pointer transition-all duration-200 ${
                                                index === currentImageIndex 
                                                    ? 'ring-2 ring-inverland-blue ring-opacity-75 shadow-md' 
                                                    : 'hover:opacity-80 hover:shadow-sm'
                                            }`}
                                            onClick={() => selectImage(index)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Title and Price */}
                        <div className="border-b pb-6">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-inverland-dark">{property.title}</h1>
                            <p className="text-lg text-gray-500 mt-2">{property.location}</p>
                            <p className="text-4xl font-bold text-inverland-green mt-4">{displayPrice}</p>
                        </div>
                        
                        {/* Key Details */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div>
                                <p className="text-2xl font-bold">{property.bedrooms}</p>
                                <p className="text-gray-600">Habitaciones</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{property.bathrooms}</p>
                                <p className="text-gray-600">Baños</p>
                            </div>
                             <div>
                                <p className="text-2xl font-bold">{property.constructionArea} m²</p>
                                <p className="text-gray-600">Superficie</p>
                            </div>
                             <div>
                                <p className="text-2xl font-bold">{property.type}</p>
                                <p className="text-gray-600">Tipo</p>
                            </div>
                        </div>

                        {/* Amenities */}
                        <div>
                             <h3 className="text-2xl font-bold text-inverland-dark mb-4">Amenidades</h3>
                             <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
                                {property.amenities.map(amenity => (
                                    <li key={amenity} className="flex items-center">
                                        <svg className="h-5 w-5 text-inverland-green mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-gray-700 capitalize">{amenity}</span>
                                    </li>
                                ))}
                             </ul>
                        </div>
                        
                        {/* Videos Section */}
                        {(property.videos && property.videos.length > 0) || property.video360 ? (
                            <div>
                                <h3 className="text-2xl font-bold text-inverland-dark mb-4">Videos</h3>
                                
                                {/* Videos de YouTube */}
                                {property.videos && property.videos.length > 0 && (
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Videos de la Propiedad</h4>
                                        <div className="space-y-4">
                                            {property.videos.map((videoUrl, index) => (
                                                <div key={index} className="bg-gray-50 rounded-lg p-4">
                                                    <div className="flex items-center space-x-3 mb-3">
                                                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                                            </svg>
                                                        </div>
                                                        <span className="text-sm text-gray-600">Video {index + 1}</span>
                                                    </div>
                                                    <a 
                                                        href={videoUrl} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                                                    >
                                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                                        </svg>
                                                        Ver en YouTube
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                
                                {/* Recorridos Virtuales 360 */}
                                {property.video360 && (
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Recorridos Virtuales 360°</h4>
                                        <div className="space-y-4">
                                            {(Array.isArray(property.video360) ? property.video360 : [property.video360]).map((v360, idx) => (
                                                <div key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                                                    <div className="flex items-center space-x-3 mb-3">
                                                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                            </svg>
                                                        </div>
                                                        <span className="text-sm text-gray-600">Recorrido {idx + 1}</span>
                                                    </div>
                                                    <a 
                                                        href={v360} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                                                    >
                                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                        </svg>
                                                        Ver Recorrido 360°
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : null}
                        
                        {/* Location Map */}
                        <div>
                            <h3 className="text-2xl font-bold text-inverland-dark mb-4">Ubicación</h3>
                            <SimplePropertyMap 
                                lat={property.latitude} 
                                lng={property.longitude} 
                                popupText={property.title}
                            />
                        </div>
                    </div>

                    {/* Contact/Agent Sidebar */}
                    <aside className="lg:col-span-1 self-start lg:sticky top-28">
                        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-inverland-dark mb-4">¿Interesado?</h3>
                            <p className="text-gray-600 mb-6">Contacta a un asesor para agendar una visita o recibir más información.</p>
                             <form className="space-y-4">
                                <div>
                                    <label htmlFor="contact-name" className="sr-only">Nombre</label>
                                    <input type="text" id="contact-name" placeholder="Tu nombre" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-inverland-green focus:border-inverland-green bg-white text-gray-800"/>
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="sr-only">Email</label>
                                    <input type="email" id="contact-email" placeholder="Tu email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-inverland-green focus:border-inverland-green bg-white text-gray-800"/>
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-inverland-green text-white font-bold py-3 px-4 rounded-md hover:bg-opacity-90 transition-transform transform hover:scale-105 mb-4">
                                        Solicitar Información
                                    </button>
                                </div>
                                
                                {/* WhatsApp Button */}
                                <div>
                                    <a 
                                        href={`https://wa.me/524773853636?text=${encodeURIComponent(`¡Hola! Me interesa la propiedad "${property.title}" por ${displayPrice}. ¿Podrían darme más información y agendar una visita?`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-md hover:bg-green-600 transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                        </svg>
                                        Consultar por WhatsApp
                                    </a>
                                </div>
                             </form>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default PropertyDetailPage;