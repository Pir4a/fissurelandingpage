import './App.css'
import { Apple, BarChart, Calendar, CheckCircle, Dumbbell, Star } from 'lucide-react'

function App() {

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Dumbbell className="h-6 w-6 text-[#6366F1]" />
            <span>FitnessFusion</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-sm font-medium transition-colors hover:text-[#6366F1]">
              Features
            </a>
            <a href="#testimonials" className="text-sm font-medium transition-colors hover:text-[#6366F1]">
              Testimonials
            </a>
            <a href="#pricing" className="text-sm font-medium transition-colors hover:text-[#6366F1]">
              Pricing
            </a>
            <a href="#faq" className="text-sm font-medium transition-colors hover:text-[#6366F1]">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Log in
            </a>
            <a
              href="#"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-[#6366F1] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#818CF8]"
            >
              Sign up
            </a>
           
          </div>
        </div>
          <div className="md:hidden p-4 bg-background border-b">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-sm font-medium transition-colors hover:text-[#6366F1]">
                Features
              </a>
              <a href="#testimonials" className="text-sm font-medium transition-colors hover:text-[#6366F1]">
                Testimonials
              </a>
              <a href="#pricing" className="text-sm font-medium transition-colors hover:text-[#6366F1]">
                Pricing
              </a>
              <a href="#faq" className="text-sm font-medium transition-colors hover:text-[#6366F1]">
                FAQ
              </a>
              <a
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground w-full"
              >
                Log in
              </a>
              <a
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-[#6366F1] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#818CF8] w-full"
              >
                Sign up
              </a>
            </nav>
          </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your Complete Fitness Journey in One App
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Track your diet, monitor your workouts, and achieve your fitness goals with FitnessFusion.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#6366F1] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#818CF8]"
                  >
                    Get Started Free
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Learn More
                  </a>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-[#6366F1]" />
                    <span>Free 14-day trial</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-[#6366F1]" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-[300px] overflow-hidden rounded-xl shadow-2xl sm:w-[350px] md:h-[600px] md:w-[380px]">
                  <img
                    src="https://placehold.co/800x1200"
                    alt="App screenshot"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#818CF8]/20 px-3 py-1 text-sm text-[#6366F1]">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to reach your fitness goals
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  FitnessFusion combines diet tracking and workout monitoring in one seamless experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="https://placehold.co/1920x1080"
                alt="Diet tracking features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-[#818CF8]/20 px-3 py-1 text-sm text-[#6366F1] w-fit">
                  Diet Tracking
                </div>
                <h3 className="text-2xl font-bold">Nutrition Made Simple</h3>
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6366F1]">
                      <Apple className="h-5 w-5 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-medium">Comprehensive Food Database</h4>
                      <p className="text-sm text-muted-foreground">
                        Access millions of foods with accurate nutritional information.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6366F1]">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-medium">Meal Planning</h4>
                      <p className="text-sm text-muted-foreground">
                        Plan your meals in advance and stay on track with your nutrition goals.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6366F1]">
                      <BarChart className="h-5 w-5 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-medium">Nutritional Insights</h4>
                      <p className="text-sm text-muted-foreground">
                        Get detailed breakdowns of macros, vitamins, and minerals in your diet.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-[#818CF8]/20 px-3 py-1 text-sm text-[#6366F1] w-fit">
                  Workout Tracking
                </div>
                <h3 className="text-2xl font-bold">Train Smarter, Not Harder</h3>
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6366F1]">
                      <Dumbbell className="h-5 w-5 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-medium">Customizable Workout Plans</h4>
                      <p className="text-sm text-muted-foreground">
                        Create and follow workout routines tailored to your specific goals.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6366F1]">
                      <BarChart className="h-5 w-5 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-medium">Progress Tracking</h4>
                      <p className="text-sm text-muted-foreground">
                        Monitor your strength gains, endurance improvements, and body measurements.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6366F1]">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-medium">Workout Scheduling</h4>
                      <p className="text-sm text-muted-foreground">
                        Plan your workout sessions and receive reminders to stay consistent.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="https://placehold.co/1920x1080"
                alt="Workout tracking features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#818CF8]/20 px-3 py-1 text-sm text-[#6366F1]">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Loved by fitness enthusiasts</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our users have to say about their experience with FitnessFusion.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4 pb-4">
                  <img src="https://placehold.co/100x100" width={40} height={40} alt="User" className="rounded-full" />
                  <div>
                    <h3 className="font-medium">Sarah Johnson</h3>
                    <div className="flex text-[#6366F1]">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "FitnessFusion has completely transformed my approach to fitness. Being able to track both my workouts
                  and diet in one app has made staying consistent so much easier."
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4 pb-4">
                  <img src="https://placehold.co/100x100" width={40} height={40} alt="User" className="rounded-full" />
                  <div>
                    <h3 className="font-medium">Michael Chen</h3>
                    <div className="flex text-[#6366F1]">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "As a personal trainer, I recommend FitnessFusion to all my clients. The comprehensive tracking
                  features help them stay accountable and see real progress."
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4 pb-4">
                  <img src="https://placehold.co/100x100" width={40} height={40} alt="User" className="rounded-full" />
                  <div>
                    <h3 className="font-medium">Emily Rodriguez</h3>
                    <div className="flex text-[#6366F1]">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "I've tried many fitness apps, but FitnessFusion is the only one that offers such detailed nutrition
                  tracking alongside workout planning. It's been a game-changer for my fitness journey."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#818CF8]/20 px-3 py-1 text-sm text-[#6366F1]">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, transparent pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that's right for your fitness journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Basic</h3>
                  <p className="text-sm text-muted-foreground">Essential features for beginners</p>
                </div>
                <div className="mb-4 flex items-baseline">
                  <span className="text-3xl font-bold">$0</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
                <ul className="mb-6 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6366F1]" />
                    <span>Basic diet tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6366F1]" />
                    <span>Basic workout logging</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6366F1]" />
                    <span>Progress photos</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md border border-[#6366F1] bg-background px-8 text-sm font-medium text-[#6366F1] shadow-sm transition-colors hover:bg-[#6366F1]/10"
                >
                  Get Started
                </a>
              </div>
              <div className="rounded-lg border border-[#6366F1] bg-background p-6 shadow-md">
                <div className="mb-1">
                  <div className="inline-block rounded-full bg-[#6366F1] px-3 py-1 text-xs text-white mb-3">
                    Most Popular
                  </div>
                  <h3 className="text-xl font-bold">Premium</h3>
                  <p className="text-sm text-muted-foreground">Advanced features for dedicated fitness enthusiasts</p>
                </div>
                <div className="mb-4 flex items-baseline">
                  <span className="text-3xl font-bold">$9.99</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
                <ul className="mb-6 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6366F1]" />
                    <span>Advanced nutrition tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6366F1]" />
                    <span>Custom workout plans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6366F1]" />
                    <span>Meal planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6366F1]" />
                    <span>Progress analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6366F1]" />
                    <span>No ads</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-[#6366F1] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#818CF8]"
                >
                  Get Started
                </a>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="mb-4">
                  <h3 className="text-xl font-bold">Pro</h3>
                  <p className="text-sm text-muted-foreground">Premium features for serious athletes</p>
                </div>
                <div className="mb-4 flex items-baseline">
                  <span className="text-3xl font-bold">$19.99</span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>
                <ul className="mb-6 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6366F1]" />
                    <span>Everything in Premium</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6366F1]" />
                    <span>AI workout recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6366F1]" />
                    <span>Personalized nutrition advice</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6366F1]" />
                    <span>Coach access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#6366F1]" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md border border-[#6366F1] bg-background px-8 text-sm font-medium text-[#6366F1] shadow-sm transition-colors hover:bg-[#6366F1]/10"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#818CF8]/20 px-3 py-1 text-sm text-[#6366F1]">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about FitnessFusion.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-4 py-12">
              <div className="rounded-lg border bg-background p-6">
                <h3 className="text-lg font-medium">How accurate is the nutrition tracking?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our nutrition database contains millions of foods with information verified by nutritionists. We
                  regularly update our database to ensure accuracy.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <h3 className="text-lg font-medium">Can I sync with my fitness wearables?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Yes! FitnessFusion integrates with popular fitness wearables and apps including Apple Health, Google
                  Fit, Fitbit, and Garmin.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <h3 className="text-lg font-medium">Is there a community feature?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Absolutely. Our Premium and Pro plans include access to our community where you can share
                  achievements, participate in challenges, and get support from like-minded individuals.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <h3 className="text-lg font-medium">How do I cancel my subscription?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  You can cancel your subscription at any time from your account settings. Your premium features will
                  remain active until the end of your billing period.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#6366F1]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl/tight">
                  Ready to transform your fitness journey?
                </h2>
                <p className="max-w-[600px] text-[#E0E7FF] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of users who have already improved their health with FitnessFusion.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <a
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#6366F1] shadow transition-colors hover:bg-gray-100"
                >
                  Get Started Free
                </a>
                <a
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold">
            <Dumbbell className="h-6 w-6 text-[#6366F1]" />
            <span>FitnessFusion</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <a href="#" className="text-xs hover:underline underline-offset-4">
              Terms of Service
            </a>
            <a href="#" className="text-xs hover:underline underline-offset-4">
              Privacy Policy
            </a>
            <a href="#" className="text-xs hover:underline underline-offset-4">
              Cookie Policy
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-[#6366F1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-[#6366F1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-[#6366F1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
        <div className="container mt-4 text-center text-xs text-muted-foreground px-4 md:px-6">
          <p>&copy; {new Date().getFullYear()} FitnessFusion. All rights reserved.</p>
        </div>
      </footer>
    </div>
)
}

export default App
