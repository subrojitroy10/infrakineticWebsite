import KpiTile from './KpiTile'

/**
 * KPI Tile Row — Responsive 4-6 tile grid
 * Standard header band above every list screen
 */
export default function KpiTileRow({ tiles, className = '', gap = 'gap-3' }) {
  return (
    <div className={`grid ${gap} sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 ${className}`}>
      {tiles.map((tile, i) => (
        <KpiTile key={tile.label || i} {...tile} style={{ transitionDelay: `${i * 0.06}s` }} />
      ))}
    </div>
  )
}