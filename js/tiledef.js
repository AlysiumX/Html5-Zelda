//Tile definitions --Tile resources are broken down here.
//Tile(ID, resource, resourceOffsetX, resourceOffsetY, width of tile, height of tile, scale, FlippedHorizontal, FlippedVertical)
//I am scaling this due to the small size of the texture. 
new tile("d_topwall1", dungeonTiles, 0, 0, 17, 17, 2, false, false, false);
new tile("d_topwall2", dungeonTiles, 17, 0, 17, 17, 2, false, false, false);
new tile("d_topwall3", dungeonTiles, 34, 0, 17, 17, 2, false, false, false);
new tile("d_topLeftCorner1", dungeonTiles, 51, 0, 17, 17, 2, false, false, false);
new tile("d_topLeftCorner2", dungeonTiles, 68, 0, 17, 17, 2, false, false, false);
new tile("d_topLeftCorner3", dungeonTiles, 85, 0, 17, 17, 2, false, false, false);

new tile("d_floor1", dungeonTiles, 0, 17, 17, 17, 2, false, false, false); 
new tile("d_floor2", dungeonTiles, 17, 17, 17, 17, 2, false, false, false); 
new tile("m_floor1", macroTiles, 0, 0, 32, 32, 1, false, false, false); 