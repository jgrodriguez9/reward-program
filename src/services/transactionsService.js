import { get } from "../server/request"

const getRewardPoint = () => get("transactions")

export { getRewardPoint }