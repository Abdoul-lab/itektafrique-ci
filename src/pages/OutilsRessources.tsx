import React, { useState } from 'react';
import { 
  Download, 
  FileText, 
  Video, 
  BookOpen, 
  Code, 
  Users, 
  ExternalLink,
  Search,
  Calendar,
  Clock,
  Eye
} from 'lucide-react';

const OutilsRessources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedResource, setSelectedResource] = useState<any>(null);

  const categories = [
    { id: 'all', label: 'Toutes les ressources', icon: BookOpen },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'videos', label: 'Tutoriels', icon: Video },
    { id: 'outils', label: 'Outils & Templates', icon: Code },
    { id: 'formations', label: 'Formations', icon: Users }
  ];

  const resources = [
    {
      id: 1,
      title: 'Guide complet du développement web moderne',
      description: 'Manuel détaillé des meilleures pratiques en développement web avec React et Node.js',
      category: 'documents',
      type: 'PDF',
      size: '3.2 MB',
      downloads: 2150,
      date: '2024-01-15',
      featured: true,
      preview: 'Ce guide vous accompagne dans l\'apprentissage du développement web moderne, étape par étape. Il comprend des exemples concrets, des bonnes pratiques et des projets pratiques.',
      tags: ['React', 'Node.js', 'JavaScript', 'Web Development']
    },
    {
      id: 2,
      title: 'Tutoriel : Déploiement d\'applications React',
      description: 'Formation vidéo complète sur le déploiement d\'applications React en production',
      category: 'videos',
      type: 'MP4',
      duration: '25 min',
      views: 4320,
      date: '2024-01-10',
      featured: true,
      preview: 'Cette vidéo de formation présente les étapes complètes pour déployer une application React sur différentes plateformes cloud.',
      tags: ['React', 'Déploiement', 'Cloud', 'Production']
    },
    {
      id: 3,
      title: 'Template API REST avec Node.js',
      description: 'Template complet pour créer une API REST sécurisée avec Node.js et Express',
      category: 'outils',
      type: 'ZIP',
      size: '1.2 MB',
      downloads: 1890,
      date: '2024-01-08',
      featured: false,
      preview: 'Template prêt à l\'emploi avec authentification JWT, validation des données, gestion d\'erreurs et documentation Swagger.',
      tags: ['Node.js', 'API', 'Express', 'JWT']
    },
    {
      id: 4,
      title: 'Formation JavaScript Avancé - Support de cours',
      description: 'Support complet pour maîtriser JavaScript ES6+ et les concepts avancés',
      category: 'formations',
      type: 'PDF',
      size: '5.8 MB',
      downloads: 3100,
      date: '2024-01-05',
      featured: true,
      preview: 'Support de formation complet pour maîtriser JavaScript moderne. Inclut théorie, exercices pratiques et projets concrets.',
      tags: ['JavaScript', 'ES6+', 'Formation', 'Programmation']
    },
    {
      id: 5,
      title: 'Calculateur de coût de projet IT',
      description: 'Outil Excel pour estimer les coûts de développement de projets informatiques',
      category: 'outils',
      type: 'XLSX',
      size: '2.1 MB',
      downloads: 1250,
      date: '2024-01-03',
      featured: false,
      preview: 'Tableur Excel automatisé pour calculer les coûts de développement selon la complexité du projet et les technologies utilisées.',
      tags: ['Estimation', 'Coûts', 'Projet', 'Excel']
    },
    {
      id: 6,
      title: 'Tutoriel : Configuration serveur Linux',
      description: 'Guide vidéo pour configurer un serveur Linux pour héberger des applications web',
      category: 'videos',
      type: 'MP4',
      duration: '35 min',
      views: 2980,
      date: '2023-12-28',
      featured: false,
      preview: 'Vidéo explicative sur l\'installation et la configuration d\'un serveur Linux pour le déploiement d\'applications web.',
      tags: ['Linux', 'Serveur', 'Configuration', 'Hébergement']
    },
    {
      id: 7,
      title: 'Template de Documentation Technique',
      description: 'Template Word pour créer une documentation technique professionnelle',
      category: 'documents',
      type: 'DOCX',
      size: '1.5 MB',
      downloads: 2250,
      date: '2023-12-25',
      featured: true,
      preview: 'Modèle de documentation technique professionnel, avec structure type et exemples pour documenter vos projets.',
      tags: ['Documentation', 'Template', 'Technique', 'Projet']
    },
    {
      id: 8,
      title: 'Guide de sécurité informatique',
      description: 'Manuel pratique des bonnes pratiques de sécurité pour les développeurs',
      category: 'documents',
      type: 'PDF',
      size: '2.8 MB',
      downloads: 1820,
      date: '2023-12-20',
      featured: false,
      preview: 'Guide illustré des bonnes pratiques de sécurité informatique pour développeurs, avec exemples concrets et check-lists.',
      tags: ['Sécurité', 'Développement', 'Bonnes pratiques', 'Cybersécurité']
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  const handleDownload = (resource: any) => {
    // Simulation du téléchargement
    alert(`Téléchargement de "${resource.title}" en cours...`);
  };

  const handlePreview = (resource: any) => {
    setSelectedResource(resource);
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-[var(--brand-orange)] text-white py-12 sm:py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative w-full px-3 sm:px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Outils & Ressources</h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-2">
              Accédez à notre bibliothèque complète de ressources en développement informatique
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
              Nos ressources les plus populaires et les plus récentes
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
                    onClick={() => handlePreview(resource)}
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

      {/* Recherche et filtres */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="w-full px-3 sm:px-4">
          <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Toutes nos ressources</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
                Trouvez rapidement les outils dont vous avez besoin
              </p>
            </div>

            {/* Barre de recherche */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher dans les ressources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Filtres par catégorie */}
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

            {/* Liste des ressources */}
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
                            onClick={() => handlePreview(resource)}
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
                <p className="text-xs sm:text-sm text-gray-500 px-2">Essayez de modifier vos critères de recherche</p>
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
                {selectedResource.tags.map((tag: string, index: number) => (
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

      {/* Section d'aide */}
      <section className="py-10 sm:py-16 bg-gradient-to-r from-blue-600 to-[var(--brand-orange)] text-white">
        <div className="w-full px-3 sm:px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 px-2">Besoin d'aide avec nos solutions ?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-2 max-w-3xl mx-auto">
            Notre équipe technique est là pour vous accompagner dans l'utilisation de nos solutions
          </p>
          <button className="bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2 text-sm sm:text-base">
            <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Contacter le support</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default OutilsRessources;