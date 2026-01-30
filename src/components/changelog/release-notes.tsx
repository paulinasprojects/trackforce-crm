import { useState, useMemo } from "react"
import { changelogReleases } from "../../lib/data";
import { FilterSelect } from "./filter-select/filter-select";
import { FilterSelectTrigger } from "./filter-select/filter-select-trigger";
import { FilterSelectContent } from "./filter-select/filter-select-content";
import { FilterSelectOption } from "./filter-select/filter-select-option";
import ReleaseCard from "./release-card";

const ReleaseNotes = () => {
  const [filters, setFilters] = useState({
    releaseType: "All",
    productArea: "All",
    integration: "All",
    date: "All",
  });

  const filterOptions = useMemo(() => {
    const releaseTypes = new Set(["All"]);
    const productAreas = new Set(["All"]);
    const integrations = new Set(["All"]);
    const dates = new Set(["All"]);

    changelogReleases.forEach(release => {
      releaseTypes.add(release.tags.releaseType)
      productAreas.add(release.tags.productArea)
      integrations.add(release.tags.integration)
      dates.add(release.date);
    });

    return {
      releaseTypes: Array.from(releaseTypes),
      productAreas: Array.from(productAreas),
      integrations: Array.from(integrations),
      dates: Array.from(dates).sort().reverse(),
    };

  }, []);


  const filterReleases = useMemo(() => {
    return changelogReleases.filter(release => {
      const matchesReleaseType = filters.releaseType === "All" || release.tags.releaseType === filters.releaseType;
      const matchesProductArea = filters.productArea === "All" || release.tags.productArea === filters.productArea;
      const matchesIntegration = filters.integration === "All" || release.tags.integration === filters.integration;
      const matchesDate = filters.date === "All" || release.date === filters.date;

      return matchesReleaseType && matchesProductArea && matchesIntegration && matchesDate;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-black p-8 xl:mb-20 md:mb-14 mb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <FilterSelect
            value={filters.releaseType}
            onValueChange={(value) => setFilters({ ...filters, releaseType: value })}
          >
            <FilterSelectTrigger placeholder="Release Type" />
            <FilterSelectContent>
              {filterOptions.releaseTypes.map((type) => (
                <FilterSelectOption
                  key={type}
                  value={type}
                >
                  {type}
                </FilterSelectOption>
              ))}
            </FilterSelectContent>
          </FilterSelect>
          <FilterSelect
            value={filters.productArea}
            onValueChange={(value) => setFilters({ ...filters, productArea: value })}
          >
            <FilterSelectTrigger placeholder="Product Area" />
            <FilterSelectContent>
              {filterOptions.productAreas.map((area) => (
                <FilterSelectOption
                  key={area}
                  value={area}
                >
                  {area}
                </FilterSelectOption>
              ))}
            </FilterSelectContent>
          </FilterSelect>
          <FilterSelect
            value={filters.integration}
            onValueChange={(value) => setFilters({ ...filters, integration: value })}
          >
            <FilterSelectTrigger placeholder="Integration" />
            <FilterSelectContent>
              {filterOptions.integrations.map((integration) => (
                <FilterSelectOption
                  key={integration}
                  value={integration}
                >
                  {integration}
                </FilterSelectOption>
              ))}
            </FilterSelectContent>
          </FilterSelect>
          <FilterSelect
            value={filters.date}
            onValueChange={(value) => setFilters({ ...filters, date: value })}
          >
            <FilterSelectTrigger placeholder="Date" />
            <FilterSelectContent>
              {filterOptions.dates.map((date) => (
                <FilterSelectOption
                  key={date}
                  value={date}
                >
                  {date === "All" ? "All Dates" : date}
                </FilterSelectOption>
              ))}
            </FilterSelectContent>
          </FilterSelect>
        </div>
        <div className="text-gray-400 text-sm mb-4">
          Showing {filterReleases.length} of {changelogReleases.length} releases
        </div>
        <div className="space-y-4">
          {filterReleases.length > 0 ? (
            filterReleases.map((release) => (
              <ReleaseCard
                key={release.id}
                release={release}
              />
            ))
          ) : (
            <div className="text-center py-12 text-gray-500 bg-gray-900/40 border border-gray-800 rounded-lg">
              <p className="text-lg mb-2">No releases found</p>
              <p className="text-sm">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReleaseNotes