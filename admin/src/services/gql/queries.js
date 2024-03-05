import { gql } from "@apollo/client";

export const ENTITY_COUNT = gql`
query {
	getEntityCount {
		name
		count
	}
}
`