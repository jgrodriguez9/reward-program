import { get } from "../server/request"

const getRewardPointByCustomer = (query) => get(`transactions/${query}`)

export { getRewardPointByCustomer }