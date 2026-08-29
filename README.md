# Prompt Presentation

# BUILD INCREMENTALLY — DO NOT WASTE TOKENS OR CREDITS



Act as a senior SaaS product engineer and frontend architect.



I am building an AI-powered Prompt-to-Presentation SaaS platform.



The product allows users to create professional PowerPoint presentations by entering either a simple or detailed natural-language prompt.



Example:



"Create a presentation about Artificial Intelligence."



or:



"Create an 18-slide investor pitch deck for an AI-powered EdTech platform targeting students in India."



The AI will eventually convert the prompt into a complete editable presentation.



---



# CRITICAL DEVELOPMENT RULES



Follow these rules strictly to avoid unnecessary development and wasted credits.



## DO NOT:



* Do not build the entire SaaS application at once.

* Do not generate unnecessary pages.

* Do not add features that I have not requested.

* Do not build billing or payment integration yet.

* Do not build collaboration yet.

* Do not build real-time multiplayer editing yet.

* Do not build export functionality yet.

* Do not build advanced animations yet.

* Do not build unnecessary admin panels.

* Do not create excessive dummy data.

* Do not redesign already completed sections unless requested.

* Do not refactor unrelated parts of the application.

* Do not replace existing working functionality.

* Do not make broad changes across the project when only a specific feature is requested.



## IMPORTANT:



Before modifying existing code, first understand the current project structure and reuse existing components wherever possible.



When implementing a feature:



1. Build only the requested feature.

2. Reuse existing components.

3. Modify the minimum number of files necessary.

4. Do not change unrelated functionality.

5. Keep the architecture modular for future expansion.

6. Avoid unnecessary dependencies.

7. Do not generate placeholder features pretending to work.

8. Clearly separate frontend UI from future backend integrations.



---



# PRODUCT



Temporary product name:



# SlideForge AI



Tagline:



# Describe Your Idea. AI Builds Your Presentation.



The product is a Prompt-to-PPT SaaS platform.



The core workflow will eventually be:



PROMPT → AI ANALYSIS → PRESENTATION OUTLINE → GENERATE SLIDES → EDIT → SAVE → EXPORT



However, DO NOT build the complete workflow now.



---



# CURRENT DEVELOPMENT PHASE



# PHASE 1 — BUILD ONLY THE CORE FRONTEND FOUNDATION



Build only the following pages and functionality.



Do not implement features outside this scope.



---



# 1. LANDING PAGE



Create a premium, modern landing page focused on AI-powered presentation generation.



The main focus should be the AI prompt input.



## Hero Headline



# Turn Any Idea Into a Powerful Presentation.



## Supporting Text



Write a simple idea or a detailed prompt and transform it into a professional presentation.



Create a large, visually prominent AI prompt input.



Placeholder:



# What would you like to create?



Example prompt suggestions:



* Create a presentation about Artificial Intelligence.

* Make a startup pitch deck for my business idea.

* Create a college presentation about climate change.

* Build a professional business presentation.

* Create an 18-slide presentation about the future of technology.



Primary button:



# Generate Presentation



### Interaction



When the user enters a prompt and clicks **Generate Presentation**:



* Preserve the entered prompt.

* Navigate to the Presentation Creation page.

* Pass the prompt to the next step.



DO NOT implement real AI generation yet.



---



# 2. PRESENTATION CREATION PAGE



Create a dedicated presentation configuration page.



Display the user's original prompt clearly at the top.



Example:



Your Idea:



"Create a presentation about Artificial Intelligence."



Below this, provide optional presentation customization controls.



The interface should remain simple and should not overwhelm the user.



---



## PRESENTATION DETAILS



### Number of Slides



Allow users to choose the number of slides.



Options:



* Auto

* 5 Slides

* 6 Slides

* 7 Slides

* 8 Slides

* 9 Slides

* 10 Slides

* 11 Slides

* 12 Slides

* 13 Slides

* 14 Slides

* 15 Slides

* 16 Slides

* 17 Slides

* 18 Slides



The selected slide count must be preserved and passed through the presentation creation workflow.



If the user selects **Auto**, the future AI generation system will determine the appropriate number of slides based on the prompt complexity.



For the current version, do not provide slide counts above 18.



---



### Presentation Type



Options:



* Educational

* Business

* Startup Pitch

* Investor Pitch

* Research

* Marketing



---



### Audience



Options:



* Students

* Investors

* Professionals

* General Audience



---



### Tone



Options:



* Professional

* Creative

* Academic

* Simple

* Futuristic



---



### Design Style



Options:



* Minimal

* Modern

* Corporate

* Futuristic

* Creative

* Dark



---



Include a primary button:



# Generate Presentation



### Interaction



For the current phase:



When the user clicks **Generate Presentation**:



1. Preserve the original prompt.

2. Preserve all selected presentation settings.

3. Navigate to the Presentation Editor.

4. Load a structured mock presentation.



The number of mock slides should respect the user's selected number.



For example:



* If the user selects 5 slides, create 5 sample slides.

* If the user selects 10 slides, create 10 sample slides.

* If the user selects 18 slides, create 18 sample slides.



If Auto is selected, use a reasonable default number of mock slides.



Do not connect to an AI API yet.



---



# 3. DASHBOARD



Create a clean and functional SaaS-style dashboard.



The dashboard should include only:



* Collapsible sidebar.

* Main AI prompt input.

* Create Presentation button.

* Recent Presentations section.



---



## SIDEBAR



Include:



* Home

* My Presentations

* Templates

* Settings



The sidebar must support:



### Expanded State



Show:



* Icons

* Labels



### Collapsed State



Show:



* Icons only



Do not create unnecessary pages or complex functionality for these sidebar items yet.



---



## MAIN DASHBOARD AREA



At the top, display:



# What would you like to create today?



Below it, include a large AI prompt input.



Placeholder:



# Describe your presentation idea...



Primary action:



# Generate Presentation



This should follow the same prompt flow as the Landing Page.



---



## RECENT PRESENTATIONS



Display a small number of realistic sample presentation cards.



Each card should show:



* Presentation thumbnail.

* Presentation title.

* Number of slides.

* Last edited information.



Actions:



* Open

* Rename

* Delete



Do not generate excessive dummy presentations.



---



# 4. BASIC PRESENTATION EDITOR



Build a functional frontend-only presentation editor.



This is the primary interface of the product.



The editor should have the following structure:



---



TOP NAVIGATION



---



LEFT SLIDE PANEL | MAIN PRESENTATION CANVAS | RIGHT PROPERTIES PANEL



---



---



# 5. TOP NAVIGATION



Include:



Left:



* Back to Dashboard button.

* Editable Presentation Title.



Center:



* Undo button.

* Redo button.



Right:



* Save status indicator.

* Preview button.



For the current version:



* Save can remain frontend state only.

* Do not implement backend autosave yet.

* Do not implement export yet.

* Do not implement sharing yet.



---



# 6. LEFT SLIDE PANEL



Display slide thumbnails vertically.



Each slide should show:



* Slide number.

* Thumbnail preview.



Allow users to:



* Select a slide.

* Add a slide.

* Delete a slide.

* Navigate between slides.



Include:



# + Add Slide



Do not implement advanced drag-and-drop slide sorting yet unless it can be implemented simply without unnecessary complexity.



---



# 7. MAIN PRESENTATION CANVAS



Create an editable presentation canvas.



The generated mock presentation must not be a single static image.



Slides should contain independently editable elements.



For the current phase, support:



* Text elements.

* Image elements.

* Basic shapes.



Users should be able to:



* Select text.

* Edit text.

* Select elements.

* Move basic elements.

* Resize basic elements.

* Delete elements.



Keep the interaction simple and stable.



Do not implement complex professional-level canvas functionality yet.



---



# 8. RIGHT PROPERTIES PANEL



The properties panel should update based on the selected element.



For text elements, provide basic controls:



* Font size.

* Font weight.

* Text color.

* Text alignment.



For image elements:



* Basic size controls.



For shapes:



* Background color.

* Border color.



Do not implement advanced image editing, filters, effects, or complex styling yet.



---



# 9. PRESENTATION PREVIEW



Implement a simple preview mode.



Users should be able to preview their presentation.



Support:



* Next slide.

* Previous slide.

* Exit preview.



Do not implement fullscreen presentation mode yet unless it is simple and does not add unnecessary complexity.



---



# 10. COMPONENT REUSE



Create reusable components only where they are genuinely useful.



Suggested components:



* Button

* PromptInput

* Sidebar

* PresentationCard

* SlideThumbnail

* EditorCanvas

* PropertiesPanel



Do not over-engineer the component architecture.



Reuse existing components before creating new ones.



---



# 11. DATA ARCHITECTURE



Even though this phase uses frontend mock data, structure the application so it can later connect to a real SaaS backend.



Presentation:



* id

* title

* originalPrompt

* settings

* slides



Presentation Settings:



* slideCount

* presentationType

* audience

* tone

* designStyle



Slide:



* id

* title

* order

* elements



Element:



* id

* type

* content

* position

* size

* style



Supported element types for now:



* Text

* Image

* Shape



---



# 12. NAVIGATION FLOW



The following flow must work properly.



## Flow A



Landing Page



↓



Enter Prompt



↓



Generate Presentation



↓



Presentation Creation Page



↓



Configure Settings



↓



Generate Presentation



↓



Presentation Editor



---



## Flow B



Dashboard



↓



Enter Prompt



↓



Generate Presentation



↓



Presentation Creation Page



↓



Configure Settings



↓



Generate Presentation



↓



Presentation Editor



---



# 13. DESIGN DIRECTION



Create a premium AI SaaS interface.



The visual identity should feel:



* Modern

* Minimal

* Professional

* Creative

* AI-focused



Do not make it look like a generic admin dashboard.



The Presentation Editor should visually feel like the core product.



Suggested colors:



Background:



#F8FAFC



Editor Workspace:



#EEF2F7



Primary Text:



#111827



Secondary Text:



#6B7280



Primary Accent:



#6C3BFF



Secondary Accent:



#00C2FF



Use gradients sparingly.



Use clean spacing and modern typography.



---



# 14. SUCCESS CRITERIA



After completing this phase, I should be able to:



1. Open the Landing Page.

2. Enter either a simple or complex presentation prompt.

3. Click Generate Presentation.

4. Reach the Presentation Creation page.

5. Select a presentation type.

6. Select an audience.

7. Select a tone.

8. Select a design style.

9. Select between Auto and 5 to 18 slides.

10. Click Generate Presentation.

11. Open the Presentation Editor.

12. See the correct number of mock slides based on my selection.

13. Navigate between slides.

14. Add slides.

15. Delete slides.

16. Select and edit text.

17. Select and modify basic elements.

18. Preview the presentation.



---



# FINAL INSTRUCTION



Build ONLY this Phase 1.



Do not implement:



* Real AI APIs.

* Authentication.

* Database integration.

* Billing.

* Payment systems.

* Collaboration.

* Real-time editing.

* Cloud storage.

* Export.

* Advanced animations.

* Advanced charts.

* Advanced AI editing.



Do not add features outside the requirements.



Do not redesign or rebuild completed components unnecessarily.



Focus on creating a stable, visually polished, connected frontend foundation for the Prompt-to-Presentation SaaS.



After completing the requirements above:



# STOP.



Wait for my next instruction before implementing Phase 2.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/69b589b4-4930-400a-b6eb-411ae67d253b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
