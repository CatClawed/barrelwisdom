from games.A25RW.viewsets import A25RWTraitViewSet, A25RWEffectViewSet, A25RWEnemyViewSet, A25RWItemViewSet, A25RWShopViewSet, A25RWTreeViewSet, A25RWCategoryViewSet

routes = (
    (r'A25RW/trait', A25RWTraitViewSet),
    (r'A25RW/effect', A25RWEffectViewSet),
    (r'A25RW/enemy', A25RWEnemyViewSet),
    (r'A25RW/item', A25RWItemViewSet),
    (r'A25RW/shop', A25RWShopViewSet),
    (r'A25RW/tree', A25RWTreeViewSet),
    (r'A25RW/category', A25RWCategoryViewSet),
)
