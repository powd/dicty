import { SuggestionsService } from './suggestions.service';

describe('Suggestion Service', () => {
  it('should return some suggestions', async () => {
    // Given
    const service = new SuggestionsService();

    // When
    const result = await service.findMany();

    // Then
    expect(result.length).toBeGreaterThan(0);
  });
});
