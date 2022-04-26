module.exports = {
    catalogUrl: "https://6vpdmaqce6.execute-api.us-west-2.amazonaws.com/",
    catalogTitle: "STAC Browser",
    allowExternalAccess: false, // Must be true if catalogUrl is not given
    useTileLayerAsFallback: true,
    tileSourceTemplate: null,
    buildTileUrlTemplate: ({href, asset}) => 'https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url=' + encodeURIComponent(asset.href.startsWith('/vsi') ? asset.href : href),
    stacProxyUrl: null,
    pathPrefix: "/browse-dev",
    historyMode: "hash",
    cardViewMode: 'list',
    showThumbnailsAsAssets: false,
    stacLint: true,
    geoTiffResolution: 128,
    redirectLegacyUrls: false,
    itemsPerPage: 24,
    crossOriginMedia: null,
    requestHeaders: {},
    requestQueryParameters: {}
};
