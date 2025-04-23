"use server"

import { pgQuery } from "@/lib/pg"

const query = `
  with loads_ds as (
    select
      *
    from loads
    order by stamp desc
    limit 10 
  ), loads_ds_json as (
    select
      json_agg(
        row_to_json(l)
      ) recent_transactions
    from loads_ds l
  ), loads_tracker_ds as (
    select 
      *
    from translog
    order by stamp desc
    limit 10
  ), loads_tracker_json as (
    select
      json_agg(
        row_to_json(l)
      ) loads_tracker
    from loads_tracker_ds l
  )
  select * from loads_ds_json, loads_tracker_json
`

export interface DashboardData {
	recent_transactions: Array<object>
	loads_tracker: Array<object>
}

export default async function getDashboardData(): Promise<DashboardData | null> {
	try {
		const data = (await pgQuery(query))?.[0] ?? {}
		return data
	} catch (error) {
		console.error("Error fetching dashboard data:", error)
		return null
	}
}
