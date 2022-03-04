export interface JobAd {
    id: string,
    heading: string,
    description: string,
    likes: string,
    type: ['remote','on-site'],
    category: string
  // can have only 1 category
  // should have a list of all candidates for the current ad and if they are accepted or not 
}
