import React, { useState, useMemo } from 'react';
import {
  Download,
  FileText,
  Video,
  BookOpen,
  Code,
  ExternalLink,
  Search,
  Calendar,
  Clock,
  Eye,
} from 'lucide-react';
import { resources, categories, featuredResources } from '../data/resourcesData';
import type { Resource } from '../data/resourcesData';

const OutilsRessources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const filteredResources = useMemo(
    () =>
      resources.filter((resource) => {
        const term = searchTerm.toLowerCase();
        const matchesSearch =
          resource.title.toLowerCase().includes(term) ||
          resource.description.toLowerCase().includes(term) ||
          resource.tags.some((tag) => tag.toLowerCase().includes(term));
        const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
        return matchesSearch && matchesCategory;
      }),
    [searchTerm, selectedCategory]
  );

  const handleDownload = (resource: Resource) => {
    alert(`Téléchargement de "${resource.title}" en cours...`);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return <FileText className="h-5 w-5 text-red-500" />;
      case 'MP4':
        return <Video className="h-5 w-5 text-blue-500" />;
      case 'XLSX':
        return <FileText className="h-5 w-5 text-[var(--brand-blue)]" />;
      case 'DOCX':
        return <FileText className="h-5 w-5 text-blue-600" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-[var(--brand-orange)] text-white py-12 sm:py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative w-full px-3 sm:px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ressources gratuites</h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-2">
              Des guides, modèles et tutoriels pour vous aider dans vos projets informatiques
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 p-3 sm:p-4 rounded-full backdrop-blur-sm">
                <BookOpen className="h-10 w-10 sm:h-16 sm:w-16 text-[var(--brand-orange)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ressources en vedette */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="w-full px-3 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Ressources en vedette</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
              Les ressources les plus téléchargées de notre bibliothèque
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {featuredResources.slice(0, 3).map((resource) => (
              <div key={resource.id} className="bg-gradient-to-br from-blue-50 to-brand-orange/10 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  {getTypeIcon(resource.type)}
                  <span className="bg-[var(--brand-orange)] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                    VEDETTE
                  </span>
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 sm:mb-3 flex-1">{resource.title}</h3>
                <p className="text-gray-600 mb-4 text-xs sm:text-sm line-clamp-2">{resource.description}</p>

                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-4">
                  <span>{resource.type}</span>
                  <span className="text-right">
                    {resource.type === 'MP4' ? (
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{resource.views} vues</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-1">
                        <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{resource.downloads} téléchargements</span>
                      </div>
                    )}
                  </span>
                </div>

                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => setSelectedResource(resource)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-1 text-xs sm:text-sm"
                  >
                    <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Aperçu</span>
                  </button>
                  <button
                    onClick={() => handleDownload(resource)}
                    className="flex-1 bg-[var(--brand-orange)] hover:opacity-95 text-white px-3 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-1 text-xs sm:text-sm"
                  >
                    <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Télécharger</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toutes les ressources */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="w-full px-3 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Toutes nos ressources</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
                Recherchez par mot-clé ou filtrez par catégorie
              </p>
            </div>

            {/* Barre de recherche */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher une ressource..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Filtres */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 sm:mb-12">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-1 px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-600 to-[var(--brand-orange)] text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">{category.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Liste */}
            <div className="grid gap-4 sm:gap-6">
              {filteredResources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="flex-shrink-0 self-start sm:self-center">
                      {getTypeIcon(resource.type)}
                    </div>

                    <div className="flex-1 w-full min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 line-clamp-2">{resource.title}</h3>
                          <p className="text-gray-600 mb-3 text-xs sm:text-sm line-clamp-2">{resource.description}</p>
                          <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                            {resource.tags.slice(0, 3).map((tag, index) => (
                              <span key={index} className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        {resource.featured && (
                          <span className="bg-[var(--brand-orange)] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                            VEDETTE
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                        <div className="flex items-center overflow-x-auto gap-2 sm:gap-6 text-xs sm:text-sm text-gray-500">
                          <div className="flex items-center space-x-1 flex-shrink-0">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{new Date(resource.date).toLocaleDateString('fr-FR')}</span>
                          </div>
                          {resource.type === 'MP4' ? (
                            <>
                              <div className="flex items-center space-x-1 flex-shrink-0">
                                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span>{resource.duration}</span>
                              </div>
                              <div className="flex items-center space-x-1 flex-shrink-0">
                                <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span>{resource.views} vues</span>
                              </div>
                            </>
                          ) : (
                            <>
                              <span className="flex-shrink-0">{resource.size}</span>
                              <div className="flex items-center space-x-1 flex-shrink-0">
                                <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                                <span>{resource.downloads} téléchargements</span>
                              </div>
                            </>
                          )}
                        </div>

                        <div className="flex gap-1 sm:gap-2 w-full sm:w-auto">
                          <button
                            onClick={() => setSelectedResource(resource)}
                            className="flex-1 sm:flex-none bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-1 text-xs sm:text-sm"
                          >
                            <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>Aperçu</span>
                          </button>
                          <button
                            onClick={() => handleDownload(resource)}
                            className="flex-1 sm:flex-none bg-[var(--brand-orange)] hover:opacity-95 text-white px-3 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-1 text-xs sm:text-sm"
                          >
                            <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>Télécharger</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredResources.length === 0 && (
              <div className="text-center py-12">
                <Code className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-base sm:text-xl font-semibold text-gray-600 mb-2">Aucune ressource trouvée</h3>
                <p className="text-xs sm:text-sm text-gray-500 px-2">Essayez d'autres mots-clés ou une autre catégorie</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal d'aperçu */}
      {selectedResource && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 line-clamp-2">{selectedResource.title}</h3>
                <button
                  onClick={() => setSelectedResource(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl flex-shrink-0 ml-2"
                >
                  ×
                </button>
              </div>

              <div className="flex items-center space-x-4 mb-6 flex-wrap gap-2 sm:gap-4">
                {getTypeIcon(selectedResource.type)}
                <span className="text-sm sm:text-base text-gray-600">{selectedResource.type}</span>
                {selectedResource.featured && (
                  <span className="bg-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                    VEDETTE
                  </span>
                )}
              </div>

              <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">{selectedResource.preview}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedResource.tags.map((tag, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => handleDownload(selectedResource)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-[var(--brand-orange)] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Télécharger maintenant</span>
                </button>
                <button
                  onClick={() => setSelectedResource(null)}
                  className="flex-1 sm:flex-none px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 text-sm sm:text-base"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section aide */}
      <section className="py-10 sm:py-16 bg-gradient-to-r from-blue-600 to-[var(--brand-orange)] text-white">
        <div className="w-full px-3 sm:px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 px-2">Une question ?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-2 max-w-3xl mx-auto">
            Notre équipe est là pour vous aider, que vous soyez débutant ou expérimenté.
          </p>
          <button className="bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2 text-sm sm:text-base">
            <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Contacter notre équipe</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default OutilsRessources;
