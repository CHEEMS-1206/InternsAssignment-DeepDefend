# InternsAssignment-DeepDefend

# Objective:
- Task is to create a pixel-perfect clone of the two provided screenshots using React. 

- The final result should be a responsive design that looks and behaves as closely as possible to the images provided.

# Techstack
- React

- CSS - SASS

- Git and Github

# Project Qualities
- Responsiveness

- Interactivity

- Pixel Perfection

- Code Quality

- Version Control

# Deliverables:
- Source code pushed to a public Git repository (e.g., GitHub).

- A `README.md` file with:

- Instructions on how to run the project locally.
  
- A brief explanation of the structure of your project and any special considerations made.
  
- A live demo of the project hosted on a service like GitHub Pages, Vercel, or Netlify.

# Evaluation Criteria:
- Closeness to design.

- Well-structured, clean, and commented code.

- Responsiveness design

- React and CSS used

# Src Links
- https://www.youtube.com/watch?v=Oq57kO1yD2U&t=627s

- https://www.youtube.com/watch?v=8I5a1ZHmYMg&t=53s

- https://www.youtube.com/watch?v=srdS_HKEXFo&t=111s

# Approach
- Page 1/2 (DashBoard-1)

-> sidebar having links

   - logo
    
   - analytics
    
   - feed
    
   - tool
    
   - mail
    
   - collaborate
    
   - settings
    
   - search
    
   - help
    
   - user-logged-in

-> header component

    - security-score-component - title, grade, score(in numerals), analytics
    
    - component-scenarios - analytics, settings
    
    - graph-section
    
       - selectors 
        
           - data - week, month, quarterly, half-yearly basis
           
           - plots - daily, weekly basis
           
       - full screen garph button
        
       - graph

-> dropdown selectors

   - scenarios-selector
    
   - day-count selector

-> 4 sub-sectional components - title and button to separate page (view all)

    1. scenarios at risk
    
       - title and button to separate page
        
       - list of scenarios with - logo, desc, graph, button(take-actions)
        
    2. critical assets at risk
    
       - subtitle
        
       - table
        
       - pie-chart
        
    3. top choke points
    
       - subtitle
        
       - table
        
       - bubble-chart
        
    4. top impacting attack tecniques
    
        3 separate compoenents each having
        
           - title
            
           - metrices

# Feature implementation and time stamp
-> creating wrapper for every container block.

-> created the sidebar component.

-> creating the main body component

-> creating the 

           - header component:
           
                security score component
                
                comparision scenario component
                
                graph component - used an image tag rather than graph (unable to get enough data for graph creation)
                
           - dropdown selectors
           
           - container for 4 sub sectional components
