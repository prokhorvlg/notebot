import TimeAgo from "react-timeago"

const Timestamp = ({ date }: { date: Date }) => {
  return (
    <p>
      {" "}
      edited{" "}
      <TimeAgo
        date={date}
        formatter={(
          value: number,
          unit: TimeAgo.Unit,
          suffix: TimeAgo.Suffix
        ) => {
          if (unit === "second") return "just now"
          const plural: string = value !== 1 ? "s" : ""
          return `${value} ${unit}${plural} ${suffix}`
        }}
      />
    </p>
  )
}

export default Timestamp
