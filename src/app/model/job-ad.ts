export interface JobAd {
    id: string,
    heading: string,
    description: string,
    likes: string,
    type: string,
    category: string
  // can have only 1 category
  // should have a list of all candidates for the current ad + if they are accepted or not 
}
