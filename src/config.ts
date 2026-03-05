import type { Config } from './types'

export const config: Config = {
  settings: {
    title: 'ZZBD Status Page',
    logo: 'logo.svg',
    url: 'status.zzbd.eu.org',
    displayDays: 90,
    collectResponseTimes: true,
  },
  monitors: [
    { id: 'qbit', name: 'PT', description: 'qbittorrent service on netcup.', url: 'http://pt.zzbd.eu.org/icons/qbittorrent-tray.svg', method: 'GET', expectStatus: 200, followRedirect: true },
    { id: 'nezha', name: '探针', description: 'nezha service on dmit.', url: 'https://node.313159.xyz/api/v1/server-group', method: 'GET', expectStatus: 200, followRedirect: true },
    { id: 'thfc', name: '果蝇中心', description: 'Tsinghua Fly Center.', url: 'https://thfc.zzbd.org/', method: 'GET', expectStatus: 200, followRedirect: true },
    { id: 'blog', name: '博客', description: 'Power by cloudflare pages and tencent CDN.', url: 'https://blog.zzbd.org/', method: 'GET', expectStatus: 200 },
    { id: 'workers-cf', name: 'workers.cloudflare.com', description: 'www.', url: 'https://workers.cloudflare.com/', method: 'GET', expectStatus: 200 },
  ],
}
